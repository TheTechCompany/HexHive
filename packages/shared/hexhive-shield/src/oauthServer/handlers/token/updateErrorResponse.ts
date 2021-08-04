export const updateErrorResponse = (e: { name: any; message: any; code: any }, res: { body: { error: any; error_description: any }; status: any }) => {
  res.body = {
    error: e.name,
    error_description: e.message,
  }

  res.status = e.code
}

