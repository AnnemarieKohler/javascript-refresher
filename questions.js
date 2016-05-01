var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return element[0] === 'a';
  });
};

var selectElementsStartingWithVowel = function(array) {
  var startsWithVowel = function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.some(function(element) {
      return word[0] === element
    });
  };
  return array.filter(startsWithVowel);
};

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element != null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    return element !== null && element !== false
  });
}

var reverseWordsInArray = function(array) {
  function reverseString(string) {
    function loop(string, newString) {
      if (string.length === 0) {
        return newString;
      }
      newString += string[string.length - 1];
      string = string.slice(0, string.length - 1);
      return loop(string, newString);
    }
    return loop(string, "");
  };

  return array.map(reverseString);
};

var everyPossiblePair = function(array) {
  array.sort();
  var pairs = [];
  var unnusedNames = (function() {
    var hash = {};

    array.forEach(function(item) {
      hash[item] = '';
    });

    return hash;
  }());

  array.forEach(function(studentA) {
    if(!unnusedNames.hasOwnProperty(studentA)) return;

    var newpairs =
      array
      .filter(function notStudentAandNotPreviouslyUsed(studentB) {
        return studentA !== studentB && unnusedNames.hasOwnProperty(studentB);
      })
      .map(function pairStudentAandStudentB(studentB) {
        return [studentA,studentB];
      });

    if(newpairs.length > 0) pairs = pairs.concat(newpairs);

    delete unnusedNames[studentA];
  });

  return pairs;
};

var allElementsExceptFirstThree = function(array) {
  return array.filter(function(_, index) {
    return index > 2;
  });
}

var addElementToBeginning = function(arr, element) {
  return [element].concat(arr);
}

var sortByLastLetter = function(array) {
  return array.sort(function(a, b){
    var lastOfA = a[a.length-1];
    var lastOfB = b[b.length-1];
    if (lastOfA < lastOfB) return -1;
    if (lastOfA > lastOfB) return 1;
    return 0;
  });
};

var getFirstHalf = function(string) {
  var halfOfString = Math.round(string.length / 2);
  return string.slice(0,halfOfString);
}

var makeNegative = function(number) {
  if (number > 0) return (number * (-1));
  return number;
}

var numberOfPalindromes = function(array) {
  var palindromes = array.filter(function(element) {
    return element === element.split('').reverse().join('');
  });
  return palindromes.length;
};

var shortestWord = function(array) {
  return array.reduce(function(previousAccumulatedValue, currentValue) {
    if (currentValue.length < previousAccumulatedValue.length) {
      previousAccumulatedValue = currentValue;
    }
    return previousAccumulatedValue;
  }, array[0]);
}

var longestWord = function(array) {
  return array.reduce(function(previousAccumulatedValue, currentValue) {
    if (currentValue.length > previousAccumulatedValue.length) {
      previousAccumulatedValue = currentValue;
    }
    return previousAccumulatedValue;
  }, array[0]);
}

var sumNumbers = function(array) {
  return array.reduce(function(sum, num) {
    return sum + num;
  });
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var sum = array.reduce(function(sum, element) {
    return sum + element;
  });
  return sum / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 6) {
      newArr.push(array[i]);
    } else {
      return newArr;
    }
  }
  return newArr;
};

var convertArrayToObject = function(array) {
  var obj = {};
  for(var i = 0; i < array.length; i++) {
    obj[array[i]] = array[i+1];
    i += 1;
  }
  return obj;
};

var getAllLetters = function(array) {
  var allLetters = array.join('').split('').sort();
  var noDuplicates = [];
  for(var i = 0; i < allLetters.length; i++) {
    if (!noDuplicates.includes(allLetters[i])) noDuplicates.push(allLetters[i]);
  }
  return noDuplicates;
};

var swapKeysAndValues = function(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

var sumKeysAndValues = function(obj) {
  var arr = [];
  for(var key in obj) {
    arr.push(parseInt(key),obj[key]);
  }
  return arr.reduce( (sum, val) => sum + val);
}

var removeCapitals = function(phrase) {
  var splitPhrase = phrase.split(' ');
  return splitPhrase.map(function(word) {
    return word.split('').filter(function(letter) {
      return letter !== letter.toUpperCase();
    }).join('');
  }).join(' ');
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
