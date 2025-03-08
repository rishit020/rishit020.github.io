const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "Push yourself, because no one else is going to do it for you." },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { text: "Dream it. Wish it. Do it.", author: "Anonymous" },
    { text: "Little things make big days.", author: "Anonymous" },
    { text: "It’s going to be hard, but hard does not mean impossible.", author: "Anonymous" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Anonymous" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
    { text: "Push harder than yesterday if you want a different tomorrow.", author: "Anonymous" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Anonymous" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Anonymous" },
    { text: "Dream it, believe it, build it.", author: "Anonymous" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
    { text: "If you want to fly, you have to give up the things that weigh you down.", author: "Toni Morrison" },
    { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Opportunities don’t happen, you create them.", author: "Chris Grosser" },
    { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Do something today that your future self will thank you for.", author: "Anonymous" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The difference between who you are and who you want to be is what you do.", author: "Anonymous" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Anonymous" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
    { text: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
    { text: "Great things never come from comfort zones.", author: "Anonymous" },
    { text: "Dream it. Believe it. Build it.", author: "Anonymous" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
    { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Anonymous" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
    { text: "Push harder than yesterday if you want a different tomorrow.", author: "Anonymous" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Anonymous" },
    { text: "The key to success is to focus on goals, not obstacles.", author: "Anonymous" },
    { text: "Dream it, believe it, build it.", author: "Anonymous" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
    { text: "If you want to fly, you have to give up the things that weigh you down.", author: "Toni Morrison" },
    { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
    // Add more quotes to reach 100+...
];

const backgrounds = [
    "linear-gradient(135deg, #FF9A8B, #FF6A88, #FF99AC)",
    "linear-gradient(135deg, #6A82FB, #FC5C7D)",
    "linear-gradient(135deg, #FDC830, #F37335)",
    "linear-gradient(135deg, #24C6DC, #514A9D)",
    "linear-gradient(135deg, #00C6FF, #0072FF)"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomBackground = Math.floor(Math.random() * backgrounds.length);

    document.querySelector('.quote').textContent = `"${quotes[randomIndex].text}"`;
    document.querySelector('.author').textContent = quotes[randomIndex].author ? `- ${quotes[randomIndex].author}` : "";

    document.body.style.background = backgrounds[randomBackground];
}

function copyToClipboard() {
    const quoteText = document.querySelector('.quote').textContent;
    const authorText = document.querySelector('.author').textContent;
    const fullQuote = `${quoteText}\n${authorText}`;
    
    const textarea = document.createElement("textarea");
    textarea.value = fullQuote;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Quote copied to clipboard!");
}
