<?php
  // ...

  $books_file = 'books.txt';

  if (!file_exists($books_file)) {
    echo "File $books_file does not exist!";
    exit;
  }

  if (!is_readable($books_file)) {
    echo "File $books_file is not readable!";
    exit;
  }

  if (!is_writable($books_file)) {
    echo "File $books_file is not writable!";
    exit;
  }

  $books_data = file_get_contents($books_file);

  if ($books_data === false) {
    echo "Failed to read file $books_file!";
    exit;
  }

  $books = unserialize($books_data);

  if ($books === false) {
    echo "Failed to unserialize data from file $books_file!";
    exit;
  }

  // ...
?>