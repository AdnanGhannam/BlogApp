class ResponseModel {
    constructor(
        public success: boolean, 
        public data?: any | null, 
        public errors?: any[] | null) { }
}

export default ResponseModel;