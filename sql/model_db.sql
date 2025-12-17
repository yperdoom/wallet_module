
-- Creation of tables for the financial system

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    fixed_salary DECIMAL(12,2),
    salary_payment_date DATE,
    total_balance DECIMAL(14,2) DEFAULT 0
);

CREATE TABLE account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(14,2) DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE account_invoice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL,
    purchase_date DATE,
    total_value DECIMAL(14,2) DEFAULT 0,
    FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE
);

CREATE TABLE card (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT NOT NULL UNIQUE,
    cost DECIMAL(12,2) DEFAULT 0,
    due_date DATE,
    closing_date DATE,
    FOREIGN KEY (account_id) REFERENCES account(id) ON DELETE CASCADE
);

CREATE TABLE card_invoice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_id INT NOT NULL,
    purchase_date DATE,
    total_value DECIMAL(14,2) DEFAULT 0,
    FOREIGN KEY (card_id) REFERENCES card(id) ON DELETE CASCADE
);

CREATE TABLE card_invoice_entry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    card_invoice_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    notes TEXT,
    date DATE NOT NULL,
    value DECIMAL(14,2) NOT NULL,
    installments INT DEFAULT 1,
    final_installments INT DEFAULT 1,
    FOREIGN KEY (card_invoice_id) REFERENCES card_invoice(id) ON DELETE CASCADE
);

CREATE TABLE account_invoice_entry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_invoice_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    notes TEXT,
    date DATE NOT NULL,
    value DECIMAL(14,2) NOT NULL,
    installments INT DEFAULT 1,
    final_installments INT DEFAULT 1,
    FOREIGN KEY (account_invoice_id) REFERENCES account_invoice(id) ON DELETE CASCADE
);
