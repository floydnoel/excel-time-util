const assert = require('assert')
const exceldate = require('./index')

describe('exceldate', () => {
  it('should return the correct date', () => {
    assert.equal(exceldate(42510).toISOString(), '2016-05-20T00:00:00.000Z')
    assert.equal(exceldate('42510').toISOString(), '2016-05-20T00:00:00.000Z')
    assert.equal(exceldate(1).toISOString(), '1899-12-31T00:00:00.000Z')
    assert.equal(exceldate('1').toISOString(), '1899-12-31T00:00:00.000Z')
    assert.equal(exceldate(2).toISOString(), '1900-01-01T00:00:00.000Z')
    assert.equal(exceldate('2').toISOString(), '1900-01-01T00:00:00.000Z')
    assert.equal(exceldate(4242.4242).toISOString(), '1911-08-12T10:10:50.880Z')
    assert.equal(
      exceldate('4242.4242').toISOString(),
      '1911-08-12T10:10:50.880Z'
    )
    assert.equal(
      exceldate(42738.22626859954).toISOString(),
      '2017-01-03T05:25:49.607Z'
    )
    assert.equal(
      exceldate('42738.22626859954').toISOString(),
      '2017-01-03T05:25:49.607Z'
    )
  })

  it('should return the correct date via callbacks', () => {
    exceldate(42510, (err, res) => {
      assert.equal(res.toISOString(), '2016-05-20T00:00:00.000Z')
    })
    exceldate('42510', (err, res) => {
      assert.equal(res.toISOString(), '2016-05-20T00:00:00.000Z')
    })
    exceldate(1, (err, res) => {
      assert.equal(res.toISOString(), '1899-12-31T00:00:00.000Z')
    })
    exceldate('1', (err, res) => {
      assert.equal(res.toISOString(), '1899-12-31T00:00:00.000Z')
    })
    exceldate(2, (err, res) => {
      assert.equal(res.toISOString(), '1900-01-01T00:00:00.000Z')
    })
    exceldate('2', (err, res) => {
      assert.equal(res.toISOString(), '1900-01-01T00:00:00.000Z')
    })
    exceldate(4242.4242, (err, res) => {
      assert.equal(res.toISOString(), '1911-08-12T10:10:50.880Z')
    })
    exceldate('4242.4242', (err, res) => {
      assert.equal(res.toISOString(), '1911-08-12T10:10:50.880Z')
    })
    exceldate(42738.22626859954, (err, res) => {
      assert.equal(res.toISOString(), '2017-01-03T05:25:49.607Z')
    })
    exceldate('42738.22626859954', (err, res) => {
      assert.equal(res.toISOString(), '2017-01-03T05:25:49.607Z')
    })
  })

  it('should throw an error for invalid inputs', () => {
    expect(() => exceldate('foo')).toThrow()
    expect(() => exceldate(false)).toThrow()
    expect(() => exceldate()).toThrow()
  })

  it('should return errors for invalid inputs via callback', () => {
    exceldate('foo', (err, res) => {
      assert.equal(null, res)
      assert.equal(err.toString(), 'Error: First argument could not be parsed.')
    })

    exceldate(null, (err, res) => {
      assert.equal(null, res)
      assert.equal(
        err.toString(),
        'Error: No first argument provided, nothing to convert.'
      )
    })
  })
})
