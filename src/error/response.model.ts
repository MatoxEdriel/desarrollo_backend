// response.model.ts
export class ResponseModel {
    constructor(
        public codigoRespuesta: string,
        public bodyRespuesta: any,
        public statusCode: number = 200
    ) {}
}
