function theBeatlesPlay(musicians,instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  let countdown = facts.length
  while (countdown > 0) {
    facts[countdown] = facts[countdown] + "!!!"
    --countdown
  }
  return facts
}
