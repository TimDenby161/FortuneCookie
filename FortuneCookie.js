function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const fortuneOptions = {
    openingLine: ['Your future holds ', 'A new chapter begins when ', 'The stars are aligned for ', 'Something unexpected will soon ', 'Beware of what lies ahead, for it brings '],
    prediction: ['a great adventure.', 'unexpected wealth.', 'a new friendship.', 'a difficult choice.', 'a life-changing opportunity.'],
    endingLine: ['Trust your instincts.', 'Now is the time to act.', 'Embrace the unknown.', 'Success is within your reach.', 'Your path will soon be clear.']
  }
  
  let personalFortune = []
  
  for(let prop in fortuneOptions) {
    let optionIdx = generateRandomNumber(fortuneOptions[prop].length)
   
    switch(prop) {
      case 'openingLine':
        personalFortune.push(`${fortuneOptions[prop][optionIdx]}`)
        break
      case 'prediction':
        personalFortune.push(`${fortuneOptions[prop][optionIdx]}`)
        break
      case 'endingLine':
        personalFortune.push(`${fortuneOptions[prop][optionIdx]}`)
        break
      default:
        personalFortune.push('There is not enough info.')
    }
  }
  
  function formatFortune(fortune) {
    const formatted = personalFortune.join('\n')
    console.log(formatted)
  }
  
  formatFortune(personalFortune);