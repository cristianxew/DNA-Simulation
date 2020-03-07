// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,

    mutate() {
      let rundBase = returnRandBase();
      let idx = Math.floor(Math.random() * 15);
      let newBase = this.dna[idx];
      if (newBase !== rundBase) {
        newBase = rundBase;
        return newBase;
      }
      this.dna.splice(idx, 1, newBase);
      return this.dna;
    },
    compareDNA(pAequor) {
      match = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          match++;
        }
      }
      let haveCommun = (match / this.dna.length * 100).toFixed(2);
      return `The two specimen have DNA in commonof ${haveCommun}%`;
    },
    willLikelySurvive() {
      let totalCorG = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          totalCorG++;
        }
      }
      if (totalCorG / this.dna.length * 100 >= 60) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

let counter = 1;
pAequors30 = [];
let test = pAequorFactory(counter, mockUpStrand());
do {
  if (test.willLikelySurvive()) {
    counter++;
  }
  pAequors30.push({ dna: test.dna, completed: counter, })
}
while (counter <= 30);

console.log(pAequors30);
