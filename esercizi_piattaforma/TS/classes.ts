class Currency {
  // Add types for these fields and make them private.
  // Hint: Look at the type of values being passed when `new Currency()`
  // is called below.

  _name: string;
  _code: string;
  _symbol: string;

  // Add types to the constructor parameters.

  constructor(name: string, code: string, symbol: string) {
    this._name = name;
    this._code = code;
    this._symbol = symbol;
    // Store the `code` and `symbol` parameter values in
    // their corresponding class fields.
  }

  // Methods are public by default.
  // Add a visibility modifier to make it clear this method is public.
  //
  // Add a return type for this method
  // Hint: Look at the inferred return type.

  public describe(): void {
    // Replace the `null` values below with the appropriate field values.
    // Hint: Access field values with: this.fieldName

    let description = `The ${this._name} currency `;
    description += `has the code ${this._code} `;
    description += `and uses the symbol ${this._symbol}.`;

    console.log(description);
  }
}

// ----

const currencyNaira = new Currency('Naira', 'NGN', '₦');

console.log(currencyNaira.describe());

// Call the `describe()` method on the `currencyNaira` object.

// ----

const currencyUsDollar = new Currency('United States dollar', 'USD', '$');

console.log(currencyUsDollar.describe());

// Call the `describe()` method on the `currencyUsDollar` object.

// ----

export {};
