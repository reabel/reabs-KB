package com.reabel.payroll;

class OrderNotFoundException extends RuntimeException {

  OrderNotFoundException(Long id) {
    super("Could not find Order " + id);
  }
}