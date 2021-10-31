import { MdGroupWork } from 'react-icons/md';

export default {
  name: 'participant',
  title: 'Participant',
  type: 'document',
  icon: MdGroupWork,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'street',
      title: 'Street',
      type: 'string',
    },
    {
      name: 'postCode',
      title: 'Post Code',
      type: 'string',
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'quiz',
      title: 'Quiz',
      type: 'reference',
      to: [{ type: 'quiz' }],
    },
    {
      name: 'captchaScore',
      title: 'Spam Score',
      type: 'number',
      description: 'from 0 (bad) to  1 (good)',
    },
  ],
};
