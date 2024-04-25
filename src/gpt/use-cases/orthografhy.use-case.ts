import OpenAI from "openai"

interface Options {
    prompt:string
}

export const ortographyCheckUseCase = async(openai: OpenAI, options: Options) =>{
    
    const {prompt} =options;

    const completion = await openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: `
                Te seran proveidos textos en español con posibles errores ortograficos y gramaticales,
                las palabras usadas deben existir en el diccionario de la real academia Española
                Debes de responder en formato JSON,
                tu tarea es corregirlos y retornar informacion soluciones,
                tambien debes dar un porcentaje de acierto por el usuario,

                si no hay errores, debes retornar un mensaje de felicitaciones

                Ejemplo de salida:
                {
                    userScore: number,
                    errores: string[] // ['error -> solucion'],
                    message: string //usa emojis y texto para felicitar al usuario
                }
                ` 
            },
            {
                role:"user",
                content: prompt
            }
        ],
        model: "gpt-3.5-turbo",
        temperature:0.3,
        max_tokens: 150,
        response_format:{
            type:'json_object'
        }
      });
    
      console.log(completion);
      const jsonResp = JSON.parse(completion.choices[0].message.content)
      return jsonResp; 

    /*return {
        prompt: prompt,
        apikey: process.env.OPEN_API_KEY,
    }*/
}
