//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const _rnaTranscriptions = {
  'C': 'G',
  'G': 'C',
  'T': 'A',
  'A': 'U'
}

export const toRna = (nucleotides) => {
  if (nucleotides.length == 0)
    return '';

  var transcriptions = '';
  nucleotides = [...nucleotides];
  for (const index in nucleotides) {
    const nucleotide = nucleotides[index];
    const transcription = _rnaTranscriptions[nucleotide];
    if (transcription == undefined) {
      console.log(`Nucleotide ${nucleotide} isn't defined.`);
      continue;
    }

    transcriptions += transcription;
  }

  return transcriptions;
};
