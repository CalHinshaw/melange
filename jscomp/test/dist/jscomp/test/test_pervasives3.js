// Generated by Melange
'use strict';

var Stdlib__List = require("melange/list.js");
var Stdlib__Pervasives = require("melange/pervasives.js");

var Pervasives = {
  invalid_arg: Stdlib__Pervasives.invalid_arg,
  failwith: Stdlib__Pervasives.failwith,
  Exit: Stdlib__Pervasives.Exit,
  min: Stdlib__Pervasives.min,
  max: Stdlib__Pervasives.max,
  abs: Stdlib__Pervasives.abs,
  max_int: Stdlib__Pervasives.max_int,
  min_int: Stdlib__Pervasives.min_int,
  lnot: Stdlib__Pervasives.lnot,
  infinity: Stdlib__Pervasives.infinity,
  neg_infinity: Stdlib__Pervasives.neg_infinity,
  nan: Stdlib__Pervasives.nan,
  max_float: Stdlib__Pervasives.max_float,
  min_float: Stdlib__Pervasives.min_float,
  epsilon_float: Stdlib__Pervasives.epsilon_float,
  classify_float: Stdlib__Pervasives.classify_float,
  $caret: Stdlib__Pervasives.$caret,
  char_of_int: Stdlib__Pervasives.char_of_int,
  string_of_bool: Stdlib__Pervasives.string_of_bool,
  bool_of_string: Stdlib__Pervasives.bool_of_string,
  bool_of_string_opt: Stdlib__Pervasives.bool_of_string_opt,
  string_of_int: Stdlib__Pervasives.string_of_int,
  int_of_string_opt: Stdlib__Pervasives.int_of_string_opt,
  string_of_float: Stdlib__Pervasives.string_of_float,
  float_of_string_opt: Stdlib__Pervasives.float_of_string_opt,
  $at: Stdlib__Pervasives.$at,
  stdin: Stdlib__Pervasives.stdin,
  stdout: Stdlib__Pervasives.stdout,
  stderr: Stdlib__Pervasives.stderr,
  print_char: Stdlib__Pervasives.print_char,
  print_string: Stdlib__Pervasives.print_string,
  print_bytes: Stdlib__Pervasives.print_bytes,
  print_int: Stdlib__Pervasives.print_int,
  print_float: Stdlib__Pervasives.print_float,
  print_endline: Stdlib__Pervasives.print_endline,
  print_newline: Stdlib__Pervasives.print_newline,
  prerr_char: Stdlib__Pervasives.prerr_char,
  prerr_string: Stdlib__Pervasives.prerr_string,
  prerr_bytes: Stdlib__Pervasives.prerr_bytes,
  prerr_int: Stdlib__Pervasives.prerr_int,
  prerr_float: Stdlib__Pervasives.prerr_float,
  prerr_endline: Stdlib__Pervasives.prerr_endline,
  prerr_newline: Stdlib__Pervasives.prerr_newline,
  read_line: Stdlib__Pervasives.read_line,
  read_int: Stdlib__Pervasives.read_int,
  read_int_opt: Stdlib__Pervasives.read_int_opt,
  read_float: Stdlib__Pervasives.read_float,
  read_float_opt: Stdlib__Pervasives.read_float_opt,
  open_out: Stdlib__Pervasives.open_out,
  open_out_bin: Stdlib__Pervasives.open_out_bin,
  open_out_gen: Stdlib__Pervasives.open_out_gen,
  flush: Stdlib__Pervasives.flush,
  flush_all: Stdlib__Pervasives.flush_all,
  output_char: Stdlib__Pervasives.output_char,
  output_string: Stdlib__Pervasives.output_string,
  output_bytes: Stdlib__Pervasives.output_bytes,
  output: Stdlib__Pervasives.output,
  output_substring: Stdlib__Pervasives.output_substring,
  output_byte: Stdlib__Pervasives.output_byte,
  output_binary_int: Stdlib__Pervasives.output_binary_int,
  output_value: Stdlib__Pervasives.output_value,
  seek_out: Stdlib__Pervasives.seek_out,
  pos_out: Stdlib__Pervasives.pos_out,
  out_channel_length: Stdlib__Pervasives.out_channel_length,
  close_out: Stdlib__Pervasives.close_out,
  close_out_noerr: Stdlib__Pervasives.close_out_noerr,
  set_binary_mode_out: Stdlib__Pervasives.set_binary_mode_out,
  open_in: Stdlib__Pervasives.open_in,
  open_in_bin: Stdlib__Pervasives.open_in_bin,
  open_in_gen: Stdlib__Pervasives.open_in_gen,
  input_char: Stdlib__Pervasives.input_char,
  input_line: Stdlib__Pervasives.input_line,
  input: Stdlib__Pervasives.input,
  really_input: Stdlib__Pervasives.really_input,
  really_input_string: Stdlib__Pervasives.really_input_string,
  input_byte: Stdlib__Pervasives.input_byte,
  input_binary_int: Stdlib__Pervasives.input_binary_int,
  input_value: Stdlib__Pervasives.input_value,
  seek_in: Stdlib__Pervasives.seek_in,
  pos_in: Stdlib__Pervasives.pos_in,
  in_channel_length: Stdlib__Pervasives.in_channel_length,
  close_in: Stdlib__Pervasives.close_in,
  close_in_noerr: Stdlib__Pervasives.close_in_noerr,
  set_binary_mode_in: Stdlib__Pervasives.set_binary_mode_in,
  string_of_format: Stdlib__Pervasives.string_of_format,
  $caret$caret: Stdlib__Pervasives.$caret$caret,
  exit: Stdlib__Pervasives.exit,
  at_exit: Stdlib__Pervasives.at_exit,
  valid_float_lexem: Stdlib__Pervasives.valid_float_lexem,
  do_at_exit: Stdlib__Pervasives.do_at_exit,
  length: Stdlib__List.length,
  compare_lengths: Stdlib__List.compare_lengths,
  compare_length_with: Stdlib__List.compare_length_with,
  cons: Stdlib__List.cons,
  hd: Stdlib__List.hd,
  tl: Stdlib__List.tl,
  nth: Stdlib__List.nth,
  nth_opt: Stdlib__List.nth_opt,
  rev: Stdlib__List.rev,
  init: Stdlib__List.init,
  append: Stdlib__List.append,
  rev_append: Stdlib__List.rev_append,
  concat: Stdlib__List.concat,
  flatten: Stdlib__List.flatten,
  equal: Stdlib__List.equal,
  compare: Stdlib__List.compare,
  iter: Stdlib__List.iter,
  iteri: Stdlib__List.iteri,
  map: Stdlib__List.map,
  mapi: Stdlib__List.mapi,
  rev_map: Stdlib__List.rev_map,
  filter_map: Stdlib__List.filter_map,
  concat_map: Stdlib__List.concat_map,
  fold_left_map: Stdlib__List.fold_left_map,
  fold_left: Stdlib__List.fold_left,
  fold_right: Stdlib__List.fold_right,
  iter2: Stdlib__List.iter2,
  map2: Stdlib__List.map2,
  rev_map2: Stdlib__List.rev_map2,
  fold_left2: Stdlib__List.fold_left2,
  fold_right2: Stdlib__List.fold_right2,
  for_all: Stdlib__List.for_all,
  exists: Stdlib__List.exists,
  for_all2: Stdlib__List.for_all2,
  exists2: Stdlib__List.exists2,
  mem: Stdlib__List.mem,
  memq: Stdlib__List.memq,
  find: Stdlib__List.find,
  find_opt: Stdlib__List.find_opt,
  find_map: Stdlib__List.find_map,
  filter: Stdlib__List.filter,
  find_all: Stdlib__List.find_all,
  filteri: Stdlib__List.filteri,
  partition: Stdlib__List.partition,
  partition_map: Stdlib__List.partition_map,
  assoc: Stdlib__List.assoc,
  assoc_opt: Stdlib__List.assoc_opt,
  assq: Stdlib__List.assq,
  assq_opt: Stdlib__List.assq_opt,
  mem_assoc: Stdlib__List.mem_assoc,
  mem_assq: Stdlib__List.mem_assq,
  remove_assoc: Stdlib__List.remove_assoc,
  remove_assq: Stdlib__List.remove_assq,
  split: Stdlib__List.split,
  combine: Stdlib__List.combine,
  sort: Stdlib__List.sort,
  stable_sort: Stdlib__List.stable_sort,
  fast_sort: Stdlib__List.fast_sort,
  sort_uniq: Stdlib__List.sort_uniq,
  merge: Stdlib__List.merge,
  to_seq: Stdlib__List.to_seq,
  of_seq: Stdlib__List.of_seq
};

var v = Stdlib__Pervasives.$at;

exports.Pervasives = Pervasives;
exports.v = v;
/* Stdlib__Pervasives Not a pure module */
