import test from 'ava';
import app from '../src/sha256.mjs';
const sha256 = app();

var cases = {
    'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592': 'The quick brown fox jumps over the lazy dog',
    'ef537f25c895bfa782526529a9b63d97aa631564d5d789c2b765448c8635fb6c': 'The quick brown fox jumps over the lazy dog.'
};
test(`#sha256 ""`,t=>t.is(sha256(''),'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'));
Object.keys(cases).forEach(hash=>test(`#sha256 "${cases[hash]}"`,t=>t.is(sha256(cases[hash]),hash)));
