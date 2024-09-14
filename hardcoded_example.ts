class ApiClient {
    private readonly apiKey: string = "12345-abcde-67890-fghij";
    private readonly apiSecret: string = "s3cr3tKeyForAPI!"; 

    public connect(): void {
        console.log("Conectando ao serviço com:");
        console.log(`Chave de API: ${this.apiKey}`);
        console.log(`Segredo da API: ${this.apiSecret}`);
     
    }
}
function main(): void {
    const client = new ApiClient();
    client.connect();
}

main();
