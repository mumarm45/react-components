const config = {
    SHOULD_OUTPUT_SOURCE_MAP: process.env.SOURCEMAP !== 'false',
    SHOULD_MINIMIZE_OUTPUT: process.env.MINIMIZE !== 'false',
  }
  
  module.exports = config