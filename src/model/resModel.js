class BaseModel {
	constructor(data, message) {
		if (typeof data === 'string') {
			// 此时只有massage一个参数
			this.message = data
			data = null
			message = null
		}

		if (data) {
			this.data = data
		}

		if (message) {
			this.message = message
		}
	}
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.err = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.err = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
