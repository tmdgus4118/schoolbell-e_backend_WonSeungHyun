function numIslands(grid: number[][]): number {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // 방향 벡터 (가로, 세로, 대각선 포함)
  const directions = [
      [-1, -1], [-1, 0], [-1, 1], // 위쪽 3방향
      [0, -1],         [0, 1],  // 좌우 방향
      [1, -1], [1, 0], [1, 1]  // 아래쪽 3방향
  ];

  function dfs(x: number, y: number) {
      // 범위를 벗어나거나, 이미 방문한 지역(0)이면 종료
      if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === 0) return;

      // 방문 처리 (바다로 변경)
      grid[x][y] = 0;

      // 8방향 탐색
      for (const [dx, dy] of directions) {
          dfs(x + dx, y + dy);
      }
  }

  // 전체 그리드를 순회하면서 섬 찾기
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 1) { // 땅 발견
              islandCount++;
              dfs(i, j); // DFS로 연결된 모든 땅 탐색
          }
      }
  }

  return islandCount;
}

// 실행 예제
const gridExample: number[][] = [
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1]
];

console.log(`result: ${numIslands(gridExample)}`);
