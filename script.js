const button = document.querySelector('.dropdownbtn');
const arrowup = document.querySelector('.arrowup');
const content = document.querySelector('.content');
const dropdown = document.querySelector('.dropdown');
const button2 = document.querySelector('.dropdownbtn2');
const arrowup2 = document.querySelector('.arrowup2');
const content2 = document.querySelector('.content2');
const dropdown2 = document.querySelector('.dropdown2');

const opennav = document.querySelector('.hamburger');
const closenav = document.querySelector('.closenav');
const drops = document.querySelector('.drops');

// dropdown code sectioon

dropdown1();
drop1();

function dropdown1() {
  button.addEventListener('click', () => {
    opendrop();
  });

  function opendrop() {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      arrowup.setAttribute('src', '/images/icon-arrow-up.svg');
    } else {
      content.style.display = 'none';
      arrowup.setAttribute('src', '/images/icon-arrow-down.svg');
    }
  }

  function drop() {
    dropdown.addEventListener('mouseover', () => {
      onlyopen();
    });

    dropdown.addEventListener('mouseout', () => {
      onlyclose();
    });

    function onlyopen() {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        arrowup.setAttribute('src', '/images/icon-arrow-up.svg');
      }
    }

    function onlyclose() {
      if (content.style.display === 'block') {
        content.style.display = 'none';
        arrowup.setAttribute('src', '/images/icon-arrow-down.svg');
      }
    }
  }

  drop();
}

dropdown1();

function drop1() {
  button2.addEventListener('click', () => {
    opendrop2();
  });

  function opendrop2() {
    if (content2.style.display === 'none') {
      content2.style.display = 'block';
      arrowup2.setAttribute('src', '/images/icon-arrow-up.svg');
    } else {
      content2.style.display = 'none';
      arrowup2.setAttribute('src', '/images/icon-arrow-down.svg');
    }
  }

  drop2();

  function drop2() {
    dropdown2.addEventListener('mouseover', () => {
      onlyopen2();
    });

    dropdown2.addEventListener('mouseout', () => {
      onlyclose2();
    });

    function onlyopen2() {
      if (content2.style.display === 'none') {
        content2.style.display = 'block';
        arrowup2.setAttribute('src', '/images/icon-arrow-up.svg');
      }
    }

    function onlyclose2() {
      if (content2.style.display === 'block') {
        content2.style.display = 'none';
        arrowup2.setAttribute('src', '/images/icon-arrow-down.svg');
      }
    }
  }

  drop2();
}

drop1();

// mobile nav code section

nav();

function nav() {
  opennav.addEventListener('click', () => {
    drops.style.right = `${0}px`;
  });

  closenav.addEventListener('click', () => {
    drops.style.right = `${-320}px`;
  });
}
