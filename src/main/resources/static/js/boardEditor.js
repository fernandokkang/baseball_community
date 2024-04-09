const boardContent = document.getElementById('boardContent').value;
updateCharacterCount(boardContent);
const editor = new toastui.Editor({
    el: document.querySelector('#editor'),
    previewStyle: 'vertical',
    height: '500px',
    initialValue: boardContent,
    placeholder: '내용 입력',
    hooks: {
        async addImageBlobHook(blob, callback) {
            try {
                const formData = new FormData();
                formData.append('image', blob);

                console.log(formData);

                const response = await fetch('/tui-editor/image-upload', {
                    method: 'POST',
                    body: formData,
                });

                const filename = await response.text();

                const imageUrl = `/tui-editor/image-print?filename=${filename}`;
                callback(imageUrl, 'image alt attribute');

            } catch (error) {
                console.error('업로드 실패 : ', error);
            }
        },
        change: function() {
            const content = editor.getMarkdown(); // 에디터의 Markdown 내용 가져오기
            updateCharacterCount(content);
        }
    }
});

// 글자 수 업데이트 함수
function updateCharacterCount(content) {
    const contentLength = content.length;
    const maxLength = 3000; // 최대 글자 수 설정

    // 에디터 하단에 글자 수 표시
    const characterCountElement = document.querySelector('#character-count');
    characterCountElement.textContent = `${contentLength} / ${maxLength}`;

    if (contentLength > maxLength) { // 3000자를 초과하는 경우
        const trimmedContent = content.slice(0, maxLength); // 초과된 부분 자르기
        editor.setMarkdown(trimmedContent); // 에디터 내용 설정
        alert("3000자 이하로 작성해주세요.");
    }
}




// 게시글 수정
function updateBoard() {
    const formData = new FormData();
    const boardId = document.getElementById("board-id").value;
    const title = document.getElementById('title').value
    const team = document.getElementById('team').value;
    const content = editor.getMarkdown()
    formData.append('title', title);
    formData.append('content', content);
    // 수정할 데이터를 URL 매개변수에 포함하여 PUT 요청 보내기
    fetch(`/boards/${boardId}`, {
        method: 'PUT',
        body: formData,
    }).then(() => {
        alert('수정이 완료되었습니다');
        location.replace(`/boards/` + boardId + '?team=' +team);
    });
}

const updateButton = document.getElementById('board-update-btn');
if (updateButton) {
    // 클릭 이벤트가 감지되면 수정 API 요청
    updateButton.addEventListener('click', event => {
        const formData = new FormData();
        const boardId = document.getElementById("board-id").value;
        const title = document.getElementById('title').value
        const team = document.getElementById('team').value;
        const content = editor.getMarkdown()
        formData.append('title', title);
        formData.append('content', content);
        // 수정할 데이터를 URL 매개변수에 포함하여 PUT 요청 보내기
        fetch(`/boards/${boardId}`, {
            method: 'PUT',
            body: formData,
        }).then((data) => {
            alert('수정이 완료되었습니다');
            location.replace(`/boards/` + boardId + '?team=' +team);
        });
    });
}

// 게시글 등록
const createButton = document.getElementById('board-create-btn');
if (createButton) {
    createButton.addEventListener('click', event => {
        let formData = new FormData();
        let title = document.getElementById('title').value
        const team = document.getElementById('team').value;
        const content = editor.getMarkdown()

        formData.append('title', title);
        formData.append('content', content);
        formData.append('team',team);

        if (title === "" && content === "") {
            alert('제목과 내용을 적어주세요.');
        } else if (title === "") {
            alert('제목이 비었습니다.');
        } else if (content === "") {
            alert('내용이 비었습니다.');
        } else {
            fetch(`/boards`, {
                method: 'POST',
                body: formData,
            }).then(response => response.json()
            ).then((data) => {
                alert('등록 완료되었습니다');
                location.replace(`/boards/` + data.id + '?team=' + team);
            });
        }
    });
}
