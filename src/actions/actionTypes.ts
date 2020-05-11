/** Academy */
export const SAVE_CANVAS = 'SAVE_CANVAS';

/** Commons (used by many) */
export const LOG_OUT = 'LOG_OUT';

/** Playground */
export const CHANGE_QUERY_STRING = 'CHANGE_QUERY_STRING';
export const GENERATE_LZ_STRING = 'GENERATE_LZ_STRING';
export const TOGGLE_USING_SUBST = 'TOGGLE_USING_SUBST';

/** Interpreter */

export const BEGIN_INTERRUPT_EXECUTION = 'BEGIN_INTERRUPT_EXECUTION';
export const END_INTERRUPT_EXECUTION = 'END_INTERRUPT_EXECUTION';
export const EVAL_INTERPRETER_ERROR = 'EVAL_INTERPRETER_ERROR';
export const EVAL_INTERPRETER_SUCCESS = 'EVAL_INTERPRETER_SUCCESS';
export const EVAL_TESTCASE_FAILURE = 'EVAL_TESTCASE_FAILURE';
export const EVAL_TESTCASE_SUCCESS = 'EVAL_TESTCASE_SUCCESS';
export const HANDLE_CONSOLE_LOG = 'HANDLE_CONSOLE_LOG';
export const BEGIN_DEBUG_PAUSE = 'BEGIN_DEBUG_PAUSE';
export const END_DEBUG_PAUSE = 'END_DEBUG_PAUSE';
export const DEBUG_RESUME = 'DEBUG_RESUME';
export const DEBUG_RESET = 'DEBUG_RESET';
export const HIGHLIGHT_LINE = 'HIGHLIGHT_LINE';

/** Workspace */
export const BEGIN_CLEAR_CONTEXT = 'BEGIN_CLEAR_CONTEXT';
export const BROWSE_REPL_HISTORY_DOWN = 'BROWSE_REPL_HISTORY_DOWN';
export const BROWSE_REPL_HISTORY_UP = 'BROWSE_REPL_HISTORY_UP';
export const CHANGE_EDITOR_HEIGHT = 'CHANGE_EDITOR_HEIGHT';
export const CHANGE_EDITOR_WIDTH = 'CHANGE_EDITOR_WIDTH';
export const CHANGE_EXEC_TIME = 'CHANGE_EXEC_TIME';
export const CHANGE_EXTERNAL_LIBRARY = 'CHANGE_EXTERNAL_LIBRARY';
export const CHANGE_SIDE_CONTENT_HEIGHT = 'CHANGE_SIDE_CONTENT_HEIGHT';
export const CHAPTER_SELECT = 'CHAPTER_SELECT';
export const CLEAR_REPL_INPUT = 'CLEAR_REPL_INPUT';
export const CLEAR_REPL_OUTPUT = 'CLEAR_REPL_OUTPUT';
export const CLEAR_REPL_OUTPUT_LAST = 'CLEAR_REPL_OUTPUT_LAST';
export const END_CLEAR_CONTEXT = 'END_CLEAR_CONTEXT';
export const ENSURE_LIBRARIES_LOADED = 'ENSURE_LIBRARIES_LOADED';
export const EVAL_EDITOR = 'EVAL_EDITOR';
export const EVAL_REPL = 'EVAL_REPL';
export const PROMPT_AUTOCOMPLETE = 'PROMPT_AUTOCOMPLETE';
// For interpreting code blocks silently (e.g. prepend) BEFORE the test case is run
export const EVAL_SILENT = 'EVAL_SILENT';
export const EVAL_TESTCASE = 'EVAL_TESTCASE';
export const MOVE_CURSOR = 'MOVE_CURSOR';
export const NAV_DECLARATION = 'NAV_DECLARATION';
export const PLAYGROUND_EXTERNAL_SELECT = 'PLAYGROUND_EXTERNAL_SELECT ';
export const RESET_TESTCASE = 'RESET_TESTCASE';
export const RESET_WORKSPACE = 'RESET_WORKSPACE';
export const SEND_REPL_INPUT_TO_OUTPUT = 'SEND_REPL_INPUT_TO_OUTPUT';
export const TOGGLE_EDITOR_AUTORUN = 'TOGGLE_EDITOR_AUTORUN';
export const UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';
export const UPDATE_CURRENT_ASSESSMENT_ID = 'UPDATE_CURRENT_ASSESSMENT_ID';
export const UPDATE_CURRENT_SUBMISSION_ID = 'UPDATE_CURRENT_SUBMISSION_ID';
export const UPDATE_EDITOR_VALUE = 'UPDATE_EDITOR_VALUE';
export const UPDATE_EDITOR_BREAKPOINTS = 'UPDATE_EDITOR_BREAKPOINTS';
export const UPDATE_HAS_UNSAVED_CHANGES = 'UPDATE_HAS_UNSAVED_CHANGES';
export const UPDATE_REPL_VALUE = 'UPDATE_REPL_VALUE';
export const UPDATE_WORKSPACE = 'UPDATE_WORKSPACE';

/** Collab Editing */
export const INIT_INVITE = 'INIT_INVITE';
export const INVALID_EDITOR_SESSION_ID = 'INVALID_EDITOR_SESSION_ID';
export const FINISH_INVITE = 'FINISH_INVITE';
export const SET_EDITOR_SESSION_ID = 'SET_EDITOR_SESSION_ID';
export const SET_WEBSOCKET_STATUS = 'SET_WEBSOCKET_STATUS';

/** Material */
export const CREATE_MATERIAL_FOLDER = 'CREATE_MATERIAL_FOLDER';
export const DELETE_MATERIAL = 'DELETE_MATERIAL';
export const DELETE_MATERIAL_FOLDER = 'DELETE_MATERIAL_FOLDER';
export const FETCH_MATERIAL_INDEX = 'FETCH_MATERIAL_INDEX';
export const UPDATE_MATERIAL_DIRECTORY_TREE = 'UPDATE_MATERIAL_DIRECTORY_TREE';
export const UPDATE_MATERIAL_INDEX = 'UPDATE_MATERIAL_INDEX';
export const UPLOAD_MATERIAL = 'UPLOAD_MATERIAL';

/** Sourcecast */
export const FETCH_SOURCECAST_INDEX = 'FETCH_SOURCECAST_INDEX';
export const SET_CODE_DELTAS_TO_APPLY = 'SET_CODE_DELTAS_TO_APPLY';
export const SET_EDITOR_READONLY = 'SET_EDITOR_READONLY';
export const SET_INPUT_TO_APPLY = 'SET_INPUT_TO_APPLY';
export const SET_SOURCECAST_DATA = 'SET_SOURCECAST_DATA';
export const SET_SOURCECAST_PLAYBACK_DURATION = 'SET_SOURCECAST_PLAYBACK_DURATION';
export const SET_SOURCECAST_PLAYBACK_STATUS = 'SET_SOURCECAST_PLAYBACK_STATUS';
export const UPDATE_SOURCECAST_INDEX = 'UPDATE_SOURCECAST_INDEX';

/** Sourcereel */
export const DELETE_SOURCECAST_ENTRY = 'DELETE_SOURCECAST_ENTRY';
export const RECORD_INPUT = 'RECORD_INPUT';
export const RECORD_INIT = 'RECORD_INIT';
export const SAVE_SOURCECAST_DATA = 'SAVE_SOURCECAST_DATA';
export const TIMER_PAUSE = 'TIMER_PAUSE';
export const TIMER_RESET = 'TIMER_RESET';
export const TIMER_RESUME = 'TIMER_RESUME';
export const TIMER_START = 'TIMER_START';
export const TIMER_STOP = 'TIMER_STOP';

/** Session */
export const FETCH_ANNOUNCEMENTS = 'FETCH_ANNOUNCEMENTS';
export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_ASSESSMENT = 'FETCH_ASSESSMENT';
export const FETCH_ASSESSMENT_OVERVIEWS = 'FETCH_ASSESSMENT_OVERVIEWS';
export const FETCH_GRADING = 'FETCH_GRADING';
export const FETCH_GRADING_OVERVIEWS = 'FETCH_GRADING_OVERVIEWS';
export const LOGIN = 'LOGIN';
export const SET_TOKENS = 'SET_TOKENS';
export const SET_USER = 'SET_USER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const SUBMIT_ASSESSMENT = 'SUBMIT_ASSESSMENT';
export const SUBMIT_GRADING = 'SUBMIT_GRADING';
export const SUBMIT_GRADING_AND_CONTINUE = 'SUBMIT_GRADING_AND_CONTINUE';
export const UNSUBMIT_SUBMISSION = 'UNSUBMIT_SUBMISSION';
export const UPDATE_HISTORY_HELPERS = 'UPDATE_HISTORY_HELPERS';
export const UPDATE_ASSESSMENT_OVERVIEWS = 'UPDATE_ASSESSMENT_OVERVIEWS';
export const UPDATE_ASSESSMENT = 'UPDATE_ASSESSMENT';
export const UPDATE_GRADING_OVERVIEWS = 'UPDATE_GRADING_OVERVIEWS';
export const UPDATE_GRADING = 'UPDATE_GRADING';

/** Storage */
export const HANDLE_ACCESS_TOKEN = 'HANDLE_ACCESS_TOKEN';
export const OPEN_PICKER = 'OPEN_PICKER';
export const OPEN_FILE = 'OPEN_FILE';
export const SAVE_TO_DRIVE = 'SAVE_TO_DRIVE';
export const UPDATE_TO_DRIVE = 'UPDATE_TO_DRIVE';
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const ACKNOWLEDGE_NOTIFICATIONS = 'ACKNOWLEDGE_NOTIFICATIONS';
export const UPDATE_NOTIFICATIONS = 'UPDATE_NOTIFICATIONS';
export const NOTIFY_CHATKIT_USERS = 'NOTIFY_CHATKIT_USERS';
