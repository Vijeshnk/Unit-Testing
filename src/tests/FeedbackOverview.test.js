import { render, screen,logRoles, getAllByRole } from '@testing-library/react';

import FeedbackOverview from '../components/FeedbackOverview'

test('No Feedback Found Scenario', () => {
  render(<FeedbackOverview feedbackList={[]} />);
  
  const feedbackNotFoundh3 = screen.getByText("No Feedback Found",{exact:false});
  
  expect(feedbackNotFoundh3).toBeInTheDocument();

});

test('Feedback Found Scenario', () => {
  const feedbacks=[
    {id:111,feedbackText:"Food was too spicy"},
    {id:222,feedbackText:"Staff should be more polite"},
    {id:333,feedbackText:"Price was high"}
  ]
  render(<FeedbackOverview feedbackList={feedbacks} />);
  const feedbackNotFoundh3 = screen.queryByTestId("No Feedback Found",{exact:false})
  expect(feedbackNotFoundh3).not.toBeInTheDocument();

  const li1 = screen.getByText('Food was too spicy',{exact:false})
  expect(li1).toBeInTheDocument()

  const li2 = screen.getByText('Staff should be more polite',{exact:false})
  expect(li2).toBeInTheDocument()

  const elemsLi = screen.getAllByRole('listitem')
  expect(elemsLi.length).toBe(feedbacks.length)

});
