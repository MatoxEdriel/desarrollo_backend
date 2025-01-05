// response.service.ts
import { HttpStatus, ErrorCodes } from '../enums/codesHttpEnum';
import { ResponseModel } from './response.model';
export class ResponseService {
    static success(bodyResponse: any, statusCode: HttpStatus = HttpStatus.ok): ResponseModel {
        return new ResponseModel('OK001', bodyResponse, statusCode);
    }




    static error(errorCode: ErrorCodes, message: string, statusCode: HttpStatus = HttpStatus.badRequest): ResponseModel {
        return new ResponseModel(errorCode, message, statusCode);
    }


    static exception(message: string): ResponseModel {
        return new ResponseModel('UE001', message, HttpStatus.internalServerError);
    }
}
