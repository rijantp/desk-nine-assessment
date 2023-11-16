export class LoginUtility {
  static generatePassword(): string {
    let generatedPassword = ''
    const specialCharList = ['-', '!', '@', '#', '$', '%', '^', '&', '*', '/']
    const lowerCaseList = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const numberList = '1234567890'.split('')

    for (let index in [0, 1, 2]) {
      generatedPassword =
        generatedPassword +
        specialCharList[LoginUtility.randomNumber(0, specialCharList.length)] +
        lowerCaseList[LoginUtility.randomNumber(0, lowerCaseList.length)] +
        lowerCaseList[LoginUtility.randomNumber(0, lowerCaseList.length)] +
        numberList[LoginUtility.randomNumber(0, numberList.length)] +
        upperCaseList[LoginUtility.randomNumber(0, upperCaseList.length)]
    }
    generatedPassword = [...generatedPassword]
      .sort(() => {
        return Math.random() - 0.5
      })
      .join('')

    return generatedPassword
  }

  static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
