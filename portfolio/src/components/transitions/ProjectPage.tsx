import React from 'react';

type Props = {
  children?: React.ReactNode,
}

// r x c
type dimensions = [number, number];

// does not have to be large; are just crammed to
// left and top as possible
const largeTiles: dimensions[] = [
  [2, 2],
  [1, 2],
  [2, 1],
  [1, 2],
  [2, 1],
  [1, 2],
];

const nextTile = (grid: boolean[][], current: dimensions): dimensions => {
  let i = current[0], j = current[1];
  let m = grid.length, n = grid[0].length;

  let j2 = (j + 1) % n;
  let i2 = (j + 1) >= n ? i + 1 : i;

  if (i2 >= m || j2 >= n) {
    return [-1, -1];
  } else {
    return [i2, j2];
  }
}

const hasNext = (grid: boolean[][], current: dimensions): boolean => {
  let next = nextTile(grid, current);

  return next[0] != -1;
}

const arrangeTiles = (keyTiles: dimensions[], m: number, n: number) => {
  let grid: boolean[][] = [];

  for (let i = 0; i < m; i++) {
    grid.push(new Array<boolean>(n));
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = false;
    }
  }

  for (let i = 0; i < keyTiles.length; i++) {

  }

  return grid;
}

const canFitAt = (grid: boolean[][], current: dimensions, tile: dimensions): boolean => {
  let [a, b] = current;

  for (let i = a; i < a + tile[0]; i++) {
    for (let j = b; j < b + tile[1]; j++) {
      if (!grid[i][j]) {
        return false;
      }
    }
  }

  return true;
}

export default class ProjectPage extends React.Component<Props> {
  render() {
    console.log(arrangeTiles(largeTiles, 4, 4));
    return (
      <div className="grid-container-projects">
        
      </div>
    )
  }
}