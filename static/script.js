// js文件开始
document.addEventListener('DOMContentLoaded', (event) => {
    // 点击事件
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Button clicked: ' + e.target.innerText);
        });
    });

    const quizButton = document.querySelector('.interactive-button');
    if (quizButton) {
        quizButton.addEventListener('click', () => {
            alert('Quiz functionality is not implemented yet.');
        });
    }

    // 点击反馈
    let clickEffectElement = document.querySelector('.click-effect');

    document.addEventListener('click', function(event) {
        let x = event.pageX;
        let y = event.pageY;

        let newEffect = clickEffectElement.cloneNode(true);
        newEffect.classList.add('active');

        newEffect.style.left = `${x - 10}px`;
        newEffect.style.top = `${y - 10}px`;

        document.body.appendChild(newEffect);

        setTimeout(function() {
            newEffect.remove();
        }, 600);
    });
});

