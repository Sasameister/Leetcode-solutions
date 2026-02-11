type Direction = {
    horizontalStep: number,
    verticalStep: number
}
const steps: Direction[] = [
    {
        horizontalStep: 1,
        verticalStep: 0,
    },
    {
        horizontalStep: 0,
        verticalStep: 1,
    },
    {
        horizontalStep: -1,
        verticalStep: 0,
    },
    {
        horizontalStep: 0,
        verticalStep: -1,
    }
]

function makeKey(i: number, j: number): number{

    return i * 10 + j;
}

function isOutOfBounds(pos: number, max: number): boolean{
    return pos < 0 || pos >= max;
}

function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length
    const n = matrix[0].length
    let i = 0;
    let j = 0;
    let counter = 0;

    const seen = new Map<number,number>();
    
    seen.set(makeKey(i, j), matrix[i][j]);
    while(seen.size < m*n){

        const {horizontalStep, verticalStep} = steps[counter % 4]

        if(isOutOfBounds(i + verticalStep, m) || isOutOfBounds(j + horizontalStep,n)
        || seen.has(makeKey(i + verticalStep, j + horizontalStep))){
            
            counter ++;
        }else{
            i += verticalStep
            j += horizontalStep
            seen.set(makeKey(i, j ),matrix[i][j]);
        }

    }
    //right: i = 0, j = 1
    //down : i = 1 j = 0
    //left = i = 0 j = -1
    // up: i = - 1 j = 0

    return [...seen.values()]
};
