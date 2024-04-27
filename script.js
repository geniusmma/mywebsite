document.addEventListener('DOMContentLoaded', function() {
    const leaderboardData = [
        { name: "Alice", score: 980 },
        { name: "Bob", score: 870 },
        { name: "Carol", score: 920 }
    ];

    const leaderboardSection = document.querySelector('section');
    const list = document.createElement('ul');

    leaderboardData.forEach(user => {
        let item = document.createElement('li');
        item.textContent = `${user.name}: ${user.score} points`;
        list.appendChild(item);
    });

    leaderboardSection.appendChild(list);
});
