const initialState = {
  equilibre: [
    {
      choice: 1,
      question: 'Force électrostatique <b>Fe</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 2,
      question: 'Force électromagnétique <b>Fm</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 3,
      question: 'Poids <b>P</b>',
      checked: true,
      orientation: 'down'
    },
    {
      choice: 4,
      question: 'Tension <b>N</b> du ressort',
      checked: false,
      orientation: null
    },
    {
      choice: 5,
      question: 'Tension <b>T</b> du ressort',
      checked: false,
      orientation: null
    },
    {
      choice: 6,
      question: 'Réaction <b>R</b> du support',
      checked: true,
      orientation: 'up'
    }
  ],
  comprimer: [
    {
      choice: 1,
      question: 'Force électrostatique <b>Fe</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 2,
      question: 'Force électromagnétique <b>Fm</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 3,
      question: 'Poids <b>P</b>',
      checked: true,
      orientation: 'down'
    },
    {
      choice: 4,
      question: 'Tension <b>N</b> du ressort',
      checked: false,
      orientation: null
    },
    {
      choice: 5,
      question: 'Tension <b>T</b> du ressort',
      checked: true,
      orientation: 'right'
    },
    {
      choice: 6,
      question: 'Réaction <b>R</b> du support',
      checked: true,
      orientation: 'up'
    }
  ],
  etirer: [
    {
      choice: 1,
      question: 'Force électrostatique <b>Fe</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 2,
      question: 'Force électromagnétique <b>Fm</b>',
      checked: false,
      orientation: null
    },
    {
      choice: 3,
      question: 'Poids <b>P</b>',
      checked: true,
      orientation: 'down'
    },
    {
      choice: 4,
      question: 'Tension <b>N</b> du ressort',
      checked: false,
      orientation: null
    },
    {
      choice: 5,
      question: 'Tension <b>T</b> du ressort',
      checked: true,
      orientation: 'left'
    },
    {
      choice: 6,
      question: 'Réaction <b>R</b> du support',
      checked: true,
      orientation: 'up'
    }
  ]
}

export default (state = initialState, action) => {
  return state;
};
