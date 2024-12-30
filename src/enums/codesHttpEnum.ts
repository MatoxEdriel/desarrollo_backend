export enum HttpStatus {
    ok                  = 200,
    badRequest          = 400,
    notFound            = 404,
    internalServerError = 500,
    created =  100
}

export enum ErrorCodes {
    USER_NOT_FOUND = 'ER001',
    COURSE_EMPTY = 'ER002',
    INVALID_REQUEST = 'ER111',
    TEXT_NOT_FOUND = 'ER101',
    EMPTY_RESULT = 'ER003'
}