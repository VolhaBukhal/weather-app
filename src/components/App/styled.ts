import styled from 'styled-components'

const WIDTH = '100'
const HEIGHT = '100'
const BACKGROUNDS = [
  '0',
  '1',
  '2',
  '3',
  '3',
  '5',
  '6',
  '6',
  '8',
  '0',
  '0',
  '11',
  '14',
  '14',
  '14',
  '15',
  '14',
  '14',
  '18',
  '8',
  '6',
  '6',
  '22',
  '22',
  '24',
  '25',
  '25',
  '0',
  '0',
  '29',
  '30',
  '31',
  '32',
  '33',
  '35',
  '35',
  '35',
  '35',
  '35',
  '35',
  '35',
  '41',
]

export const Container = styled.div<{ iconNumber: number }>`
  width: ${WIDTH}vw;
  height: ${HEIGHT}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background-image: url('https://raw.githubusercontent.com/VolhaBukhal/stage1-tasks/assets/images/evening/08.jpg'); */
  background-image: ${({ iconNumber }) => `url(/images/bgs/${BACKGROUNDS[iconNumber]}.webp)`};
`
