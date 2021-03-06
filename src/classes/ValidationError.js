export default class ValidationError extends Error {
  constructor (assertion, propertyName, propertyValue, parentMeta) {
    if (assertion && !propertyName && !propertyValue && !parentMeta) {
      super(assertion) // we've been passed a manual message
    } else {
      let message = 'Expected argument '

      if (propertyName) {
        message += `\`${propertyName}\` `
      }

      if (parentMeta) {
        message += `of ${parentMeta.type} \`${parentMeta.name}\` `
      }

      message += `to ${assertion}` ?? 'to be something, but whoever wrote this validator is a pepega.'

      if (propertyValue) {
        message += `, but got \`${propertyValue}\` instead.`
      } else {
        message += '.'
      }

      super(message)
    }

    this.name = 'ValidationError'
  }
}
