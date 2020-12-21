__NUXT_JSONP__("/core/CoreConfig", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{document:{slug:"CoreConfig",title:"Core Configuration Files",position:7,category:"Core",toc:[],body:{type:"root",children:[{type:c,tag:d,props:{},children:[{type:a,value:"See "},{type:c,tag:h,props:{href:i},children:[{type:a,value:i}]},{type:a,value:j}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The Haraka core reads some configuration files to determine a few actions:"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"smtp.yaml or smtp.json"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"If either of these files exist then they are loaded first after log.ini.\nThis file is designed to use the JSON\u002FYAML file overrides documented in\n"},{type:c,tag:h,props:{href:k},children:[{type:a,value:k}]},{type:a,value:" to optionally provide the entire configuration in a single file."}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"databytes"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Contains the maximum SIZE of an email that Haraka will receive."}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"plugins"}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The list of plugins to load"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"smtp.ini"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Keys:"}]},{type:a,value:b},{type:c,tag:g,props:{},children:[{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"listen_host, port - the host and port to listen on (default: ::0 and 25)"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"listen - (default: [::0]:25) Comma separated IP:Port addresses to listen on"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"inactivity_time - how long to let clients idle in seconds (default: 300)"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"nodes - specifies how many processes to fork. The string \"cpus\" will fork as many children as there are CPUs (default: 0, which disables cluster mode)"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"user - optionally a user to drop privileges to. Can be a string or UID."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"group - optionally a group to drop privileges to. Can be a string or GID."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"ignore_bad_plugins - If a plugin fails to compile by default Haraka will stop at load time.\nIf, however, you wish to continue on without that plugin's facilities, then\nset this config option"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"daemonize - enable this to cause Haraka to fork into the background on start-up (default: 0)"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"daemon_log_file - (default: \u002Fvar\u002Flog\u002Fharaka.log) where to redirect stdout\u002Fstderr when daemonized"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"daemon_pid_file - (default: \u002Fvar\u002Frun\u002Fharaka.pid) where to write a PID file to"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"spool_dir - (default: none) directory to create temporary spool files in"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"spool_after - (default: -1) if message exceeds this size in bytes, then spool the message to disk\nspecify -1 to disable spooling completely or 0 to force all messages to be spooled to disk."}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"graceful_shutdown - (default: false) enable this to wait for sockets on shutdown instead of closing them quickly"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"force_shutdown_timeout - (default: 30) number of seconds to wait for a graceful shutdown"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"smtputf8 - (default: true) advertise support for SMTPUTF8"}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:"strict_rfc1869 - (default: false) Requires senders to conform to RFC 1869 and RFC 821 when sending the MAIL FROM and RCPT TO commands. In particular,\nthe inclusion of spurious spaces or missing angle brackets will be rejected."}]},{type:a,value:b}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"me"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"A name to use for this server. Used in received lines and elsewhere. Setup\nby default to be your hostname."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"deny_includes_uuid"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Each connection and mail in Haraka includes a UUID which is also in most log\nmessages. If you put a "},{type:c,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" in this file then every denied mail (either via\nDENY\u002F5xx or DENYSOFT\u002F4xx return codes) will include the uuid at the start\nof each line of the deny message in brackets, making it easy to track\nproblems back to the logs."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Because UUIDs are long, if you put a number greater than 1 in the config\nfile, it will be truncated to that length. We recommend a 6 as a good\nbalance of finding in the logs and not making lines too long."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"banner_includes_uuid"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"This will add the full UUID to the first line of the SMTP greeting banner."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"early_talker_delay"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"If clients talk early we "},{type:c,tag:"em",props:{},children:[{type:a,value:"punish"}]},{type:a,value:" them with a delay of this many milliseconds\ndefault: 1000."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"plugin_timeout"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Seconds to allow a plugin to run before the next hook is called automatically\ndefault: 30"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Note also that each plugin can have a "},{type:c,tag:f,props:{},children:[{type:a,value:"config\u002F\u003Cplugin_name\u003E.timeout"}]},{type:a,value:"\nfile specifying a per-plugin timeout.  In this file you can set a timeout of 0 to mean that this plugin's hooks never time out.  Use this with care."}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"If the plugin is in a sub-directory of plugins, then you must create this file\nin the equivalent path e.g. the queue\u002Fsmtp_forward would need a timeout file in "},{type:c,tag:f,props:{},children:[{type:a,value:"config\u002Fqueue\u002Fsmtp_forward.timeout"}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"smtpgreeting"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The greeting line used when a client connects. This can be multiple lines\nif required (this may cause some connecting machines to fail - though\nusually only spam-bots)."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"max_received_count"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The maximum number of \"Received\" headers allowed in an email. This is a\nsimple protection against mail loops. Defaults to 100."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"max_line_length"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The maximum length of lines in SMTP session commands (e.g. RCPT, HELO etc).\nDefaults to 512 (bytes) which is mandated by RFC 5321 §4.5.3.1.4. Clients\nexceeding this limit will be immediately disconnected with a \"521 Command\nline too long\" error."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"max_data_line_length"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The maximum length of lines in the DATA section of emails. Defaults to 992\n(bytes) which is the limit set by Sendmail. When this limit is exceeded the\nthree bytes \"\\r\\n \" (0x0d 0x0a 0x20) are inserted into the stream to \"fix\"\nit. This has the potential to \"break\" some email, but makes it more likely\nto be accepted by upstream\u002Fdownstream services, and is the same behaviour\nas Sendmail. Also when the data line length limit is exceeded\n"},{type:c,tag:f,props:{},children:[{type:a,value:"transaction.notes.data_line_length_exceeded"}]},{type:a,value:" is set to "},{type:c,tag:f,props:{},children:[{type:a,value:"true"}]},{type:a,value:j}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"outbound.concurrency_max"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Maximum concurrency to use when delivering mails outbound. Defaults to 100."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"outbound.disabled"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Put a "},{type:c,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" in this file to temporarily disable outbound delivery. Useful\nwhile figuring out network issues or testing."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"outbound.bounce_message"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"The bounce message if delivery of the message fails. The default is normally fine. Bounce messages contain a number of template\nreplacement values which are best discovered by looking at the source code."}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"haproxy_hosts"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"A list of HAProxy hosts that Haraka should enable the PROXY protocol from.\nSee "},{type:c,tag:h,props:{href:m},children:[{type:a,value:m}]}]},{type:a,value:b}]},{type:a,value:b},{type:c,tag:e,props:{},children:[{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"max_mime_parts"}]},{type:a,value:b},{type:c,tag:d,props:{},children:[{type:a,value:"Defaults to 1000. There's a potential denial of service in large numbers of\nMIME parts in carefully crafted emails. If this limit is too low for some\nreason you can increase it by setting a value in this file."}]},{type:a,value:b}]},{type:a,value:b}]}]},dir:"\u002Fen\u002Fcore",path:"\u002Fen\u002Fcore\u002FCoreConfig",extension:".md",createdAt:n,updatedAt:n,to:"\u002Fcore\u002FCoreConfig"},prev:{slug:"Connection",title:"Connection Object",to:"\u002Fcore\u002FConnection"},next:{slug:"CustomReturnCodes",title:"Custom Return Codes",to:"\u002Fcore\u002FCustomReturnCodes"}}],fetch:[],mutations:[]}}("text","\n","element","p","li","code","ul","a","Logging",".","Config","1","HAProxy","2020-12-21T05:24:10.855Z")));