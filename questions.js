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
}

// [1,2,3]
// [1,2,3]

// [[1,2],[1,3]]
// [[2,3]]

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

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
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
