import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimalSlider from './AnimalSlider';

test('renders learn react link', () => {
  const data = [
    {
      id: 1,
      name: 'Tiger',
      img: 'https://th-thumbnailer.cdn-si-edu.com/fczZ2Yq8N4nBAxcMf7TqNTUMk6I=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1d/10/1d102878-7750-49f4-bced-1809c4d7e8ea/tiger.jpg',
      habitat: 'forest'
    },
    {
      id: 2,
      name: 'Lion',
      img: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MzcwODk3MDE5MjgyNzky/lion-names.jpg',
      habitat: 'forest'
    },
    {
      id: 3,
      name: 'Elephant',
      img: 'https://files.worldwildlife.org/wwfcmsprod/images/African_Elephant_Kenya_112367/story_full_width/qxyqxqjtu_WW187785.jpg',
      habitat: 'forest'
    },
    {
      id: 4,
      name: 'Koala',
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg',
      habitat: 'forest'
    }
  ]
  render(<AnimalSlider data={data} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
