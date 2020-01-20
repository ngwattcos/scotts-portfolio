import React from 'react';
import ProjectCard from '../ProjectCard';

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

const claimSpace = (grid: boolean[][], position: dimensions, size: dimensions): boolean[][] => {
  let m = grid.length;
  let n = grid[0].length;
  let [a, b] = position;
  let [r, c] = size;

  for (let i = position[0]; i < Math.min(m, a + r); i++) {
    for (let j = position[1]; j < Math.min(n, b + c); j++) {
      grid[i][j] = true;
    }
  }
  return grid;
}

const arrangeTiles = (keyTiles: dimensions[], m: number, n: number) => {
  let grid: boolean[][] = [];

  // every time a key tile is assigned, set to true
  let assigned: boolean[] = [];

  // initialize all to false
  for (let i = 0; i < keyTiles.length; i++) {
    assigned.push(false);
  }

  // every time you add a 1 x 1 or assign tile, push here
  let finalTiles: dimensions[] = [];

  for (let i = 0; i < m; i++) {
    grid.push(new Array<boolean>(n));
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = false;
    }
  }

  // try to fit each key tile one by one
  for (let i = 0; i < keyTiles.length; i++) {
    let current: dimensions = [0, 0];
    if (canFitAt(grid, current, keyTiles[i])) {
      assigned[i] = true;
      finalTiles.push(keyTiles[i]);
      grid = claimSpace(grid, current, keyTiles[i]);
    } else {
      // place a 1 x 1 tile here
      finalTiles.push([1, 1]);
      grid = claimSpace(grid, current, [1, 1]);

      while (hasNext(grid, current)) {
        current = nextTile(grid, current);
        if (!canFitAt(grid, current, keyTiles[i])) {
          // place a 1 x 1 tile here
          finalTiles.push([1, 1]);
          grid = claimSpace(grid, current, [1, 1]);
        } else {
          assigned[i] = true;
          finalTiles.push(keyTiles[i]);
          grid = claimSpace(grid, current, keyTiles[i]);
          break;
        }
      }

      // assigned? If not, just break altogether
      // but what if next tile is smller and will fit? meh
      if (assigned[i] == false) {
        return finalTiles;
      }

    }

  }

  return finalTiles;
}

const canFitAt = (grid: boolean[][], current: dimensions, tile: dimensions): boolean => {
  let m = grid.length;
  let n = grid[0].length;
  let [a, b] = current;
  let [r, c] = tile;

  // if
  if (a == -1 || b == -1 || a + r - 1 >= m || b + c - 1 >= n) {
    return false;
  }

  for (let i = a; i < a + r; i++) {
    for (let j = b; j < b + c; j++) {
      if (grid[i][j] == true) {
        return false;
      }
    }
  }

  return true;
}


export default class ProjectPage extends React.Component<Props> {
  render() {
    const tiles = arrangeTiles(largeTiles, 4, 4)
    console.log(tiles);
    return (
      <div className="grid-container-projects">
        {tiles.map(tile => <ProjectCard width={tile[1]} height={tile[0]}>

        </ProjectCard>)}
      </div>
    )
  }
}