var arr = [15,1,30,9,25];
function arraySum(array)
{
    var sum = 0;
    for(var i = 0; i < array.length; i++)
    {
        sum += array[i];
    }
    console.log(sum);
}
arraySum(arr);