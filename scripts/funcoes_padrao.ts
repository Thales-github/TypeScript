function enviarEmail(para: string, assunto: string = "Sem assunto", remetente?: string): void {

    //parâmetros que são opcionais devem ser tratados se não eles recebem undefined
    console.log({
        para,
        assunto,
        remetente
});
}

enviarEmail("thalinho@gmail.com");