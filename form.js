const readline = require('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

//function to ask questions
const askQuestion =(question)=> {
    return new Promise((resolve) => rl.question(question , resolve));
};

// main function to handle the form
const main = async () =>{
    try{
        const name = await askQuestion('What is your name?');
        const age  = await askQuestion('What is your age?');
        const email = await askQuestion('What is your email?');

        console.log('\nForm Data:');
        console.log(`name:${name}`);
        console.log(`age:${age}`);
        console.log(`email:${email}`);
    }
    catch (error){
        console.error('Error:',error);
    }
    finally{
        rl.close();
    }
};
main();