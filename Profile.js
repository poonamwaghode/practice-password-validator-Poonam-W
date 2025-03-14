// Task 1: Create the Profile
let userProfile = {
    userName: 'Poonam123',
    age: 28,
    subscriptionStatus: 'Premium',
    location: 'New York, USA',
    hobbies: ['Reading', 'Hiking']
};

// Task 2: Access and Log Profile Details
// Log the user's name
console.log('User Name:', userProfile.userName);
// Log the second hobby from the hobbies array
console.log('Second Hobby:', userProfile.hobbies[1]);

// Task 3: Modify the Profile
// Update the user's age to a new value
userProfile.age = 29;
// Add a new hobby to the hobbies array
userProfile.hobbies.push('Photography');

// Task 4: Display the Updated Profile
console.log('Updated Profile:', userProfile);
