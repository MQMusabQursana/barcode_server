
//hamad
// const DB = {
//     host: "localhost",
//   user: "root",
//   port:3306,
//   password: "",
//   database: "barcode",
// }


//my
const DB = {
    host: "localhost",
  user: "user",
  port:null,
  password: "",
  database: "barcode_db",
}

const ResultStatus = {
    ok: 200,
    notOk: 500, 
    somethingWrong: 501,
    unauthorized: 401,
    accessDenied : 403,
    noTokenProvided: 404,
    pressureOnServer: 503,

};




const LangsCode = {
    en:"en",
    ar:"ar"
}



const UserColumns = {
    fcm_token:1,
    face_id:2,
    app_lng:3,
}


const ErrorsCode = {
    columnError: 1,
}


const UserRoles = {
    employee: "employee",
    manager: "manager",
}


const ExeptionsCode = {
    notAllowed:'NotAllowed',
    rownNotFound:'RowNotFound',
    notUpdated:'notUpdated',
    SequelizeConnectionError:"SequelizeConnectionError"
}


const NotivicationTypeCode = {
    newRequest:"new_request",
    newNote:"new_note",
    completionNote:"notice_of_completion",
}

const UserJobState = {
    busy:1,
    done:2,
    free :3,
}

const jwtSecrtKey = "barcode@jwt_key";

const saltCryptCode = 10;

module.exports = {
    DB,
    UserColumns,
    ResultStatus,
    ExeptionsCode,
    ErrorsCode,
    jwtSecrtKey,
    LangsCode,
    saltCryptCode,
    NotivicationTypeCode,
    UserRoles,
    UserJobState
} 