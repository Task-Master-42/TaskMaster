type ExpressError = {
  log: string,
  status: number,
  message: {err: string},
}

export { ExpressError };