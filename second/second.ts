function numIslands(grid: number[][]): number {
    if (!grid || grid.length === 0) return 0;   
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;    
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];  

    function dfs(x: number, y: number) {
        if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === 0) return;   
        grid[x][y] = 0; 

        for (const [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }
    }   

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                islandCount++;
                dfs(i, j);
            }
        }
    }   
    return islandCount;
}

const gridExample: number[][] = [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1]
];

console.log(`result: ${numIslands(gridExample)}`);
