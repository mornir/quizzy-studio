import { MdQuestionAnswer } from 'react-icons/md';

export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  icon: MdQuestionAnswer,
  description:
    'A list of questions along with possible answers (choices). Play a Quiz by creating a Match',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      validation: (Rule) =>
        Rule.min(1).error('A quiz must have at least one question'),
      of: [{ type: 'question' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare({ title, questions = [] }) {
      const numberOfQuestions = questions.length;
      return {
        title: title || 'untitled quiz 😢',
        subtitle: `${numberOfQuestions} ${
          numberOfQuestions === 1 ? 'question' : 'questions'
        }`,
      };
    },
  },
};
