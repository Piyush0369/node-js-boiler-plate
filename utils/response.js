// All Invalid Requests will have Response Code as 400, 
// All Response of Invalid Requests will have subcode like A1, A2, A3 etc.

// A1: Null/Empty/Undefined Value
// A2: Invalid Value (Should be A, B, or C but request is sending D)
module.exports = {
    already_exists: {
        code: 409,
        message: 'Value Already Exists'
    },
    does_not_exist: {
        code: 404,
        message: 'Does Not Exist'
    },
    forbidden: {
        code: 403,
        message: 'Forbidden'
    },
    success: {
        code: 200,
        message: 'Success'
    },
    internal_server_error: {
        code: 500,
        message: 'Something went wrong'
    },
    required: function (value) {
        return {
            code: 400,
            sub_code: 'A1',
            key: value,
            message: 'Required'
        }
    },
    false_value: function (value) {
        return {
            code: 400,
            sub_code: 'A2',
            key: value,
            message: 'False Value'
        }
    },
    size_exceeded: function (value) {
        return {
            code: 400,
            sub_code: 'A3',
            key: value,
            message: 'Size Exceeded'
        }
    },
    value_already_exists: function (value) {
        return {
            key: value,
            code: 409,
            message: 'Value Already Exists'
        }
    },
    already_requested: {
        code: 400,
        sub_code: 'A4',
        message: 'Already Requested'
    },
    not_enough_funds: {
        code: 400,
        sub_code: 'A5',
        message: 'Not Enough Funds'
    },
    incomplete_user_data: {
        code: 400,
        sub_code: 'A6',
        message: 'Incomplete User Data'
    },

    response: {
        ok: {
            code: 200,
            message: 'Ok'
        },
        created: {
            code: 201,
            message: 'Created'
        },
        accepted: {
            code: 202,
            message: 'Accepted'
        },
        forbidden: {
            code: 403,
            message: 'Forbidden'
        },
        bad_request: {
            code: 400,
            message: 'Bad Request'
        },
        server_error: {
            code: 500,
            message: 'Something went wrong.'
        },
        already_exist: {
            code: 210,
            message: 'Already Exists.'
        },
        doesnot_exist: {
            code: 212,
            message: 'Doesn\'t Exists.'
        },
        unautorize: {
            code: 401,
            message: 'Unauthorized'
        }
    }

}