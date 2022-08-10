function recursion(number)
{
    if (number === 0)
    {
        return 0;
    }
    else
    {
        console.log(number);
        recursion(number - 1);
    }
}
recursion(10);