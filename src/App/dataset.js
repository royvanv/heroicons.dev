import * as Outline from "heroicons-ecfba30/outline"
import * as Solid from "heroicons-ecfba30/solid"

// TODO: https://github.com/tailwindlabs/heroicons/issues/90
//
// - outline/academic-cap.svg
// - outline/backspace.svg
// - outline/calculator.svg
// - outline/cube.svg
// - outline/folder-open.svg
// - solid/login.svg
// - outline/presentation-chart-line.svg
// - outline/search-circle.svg
// - outline/status-offline.svg
// - outline/truck.svg
// - outline/variable.svg
// - outline/wifi.svg
//
const dataset = [
	// // FIXME
	// {
	// 	name: "academic-cap",
	// 	solid: Solid.AcademicCap,
	// 	outline: Outline.AcademicCap,
	// 	statusNew: true,
	// },
	{
		name: "adjustments",
		solid: Solid.Adjustments,
		outline: Outline.Adjustments,
		statusNew: false,
	},
	{
		name: "annotation",
		solid: Solid.Annotation,
		outline: Outline.Annotation,
		statusNew: false,
	},
	{
		name: "archive",
		solid: Solid.Archive,
		outline: Outline.Archive,
		statusNew: false,
	},
	{
		name: "arrow-circle-down",
		solid: Solid.ArrowCircleDown,
		outline: Outline.ArrowCircleDown,
		statusNew: false,
	},
	{
		name: "arrow-circle-left",
		solid: Solid.ArrowCircleLeft,
		outline: Outline.ArrowCircleLeft,
		statusNew: false,
	},
	{
		name: "arrow-circle-right",
		solid: Solid.ArrowCircleRight,
		outline: Outline.ArrowCircleRight,
		statusNew: false,
	},
	{
		name: "arrow-circle-up",
		solid: Solid.ArrowCircleUp,
		outline: Outline.ArrowCircleUp,
		statusNew: false,
	},
	{
		name: "arrow-down",
		solid: Solid.ArrowDown,
		outline: Outline.ArrowDown,
		statusNew: false,
	},
	{
		name: "arrow-left",
		solid: Solid.ArrowLeft,
		outline: Outline.ArrowLeft,
		statusNew: false,
	},
	{
		name: "arrow-narrow-down",
		solid: Solid.ArrowNarrowDown,
		outline: Outline.ArrowNarrowDown,
		statusNew: false,
	},
	{
		name: "arrow-narrow-left",
		solid: Solid.ArrowNarrowLeft,
		outline: Outline.ArrowNarrowLeft,
		statusNew: false,
	},
	{
		name: "arrow-narrow-right",
		solid: Solid.ArrowNarrowRight,
		outline: Outline.ArrowNarrowRight,
		statusNew: false,
	},
	{
		name: "arrow-narrow-up",
		solid: Solid.ArrowNarrowUp,
		outline: Outline.ArrowNarrowUp,
		statusNew: false,
	},
	{
		name: "arrow-right",
		solid: Solid.ArrowRight,
		outline: Outline.ArrowRight,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "arrows-expand",
	// 	solid: Solid.ArrowsExpand,
	// 	outline: Outline.ArrowsExpand,
	// 	statusNew: false,
	// },
	{
		name: "arrow-up",
		solid: Solid.ArrowUp,
		outline: Outline.ArrowUp,
		statusNew: false,
	},
	{
		name: "at-symbol",
		solid: Solid.AtSymbol,
		outline: Outline.AtSymbol,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "backspace",
	// 	solid: Solid.Backspace,
	// 	outline: Outline.Backspace,
	// 	statusNew: true,
	// },
	{
		name: "badge-check",
		solid: Solid.BadgeCheck,
		outline: Outline.BadgeCheck,
		statusNew: false,
	},
	{
		name: "ban",
		solid: Solid.Ban,
		outline: Outline.Ban,
		statusNew: false,
	},
	{
		name: "beaker",
		solid: Solid.Beaker,
		outline: Outline.Beaker,
		statusNew: true,
	},
	{
		name: "bell",
		solid: Solid.Bell,
		outline: Outline.Bell,
		statusNew: false,
	},
	{
		name: "bookmark",
		solid: Solid.Bookmark,
		outline: Outline.Bookmark,
		statusNew: false,
	},
	{
		name: "bookmark-alt",
		solid: Solid.BookmarkAlt,
		outline: Outline.BookmarkAlt,
		statusNew: false,
	},
	{
		name: "book-open",
		solid: Solid.BookOpen,
		outline: Outline.BookOpen,
		statusNew: false,
	},
	{
		name: "briefcase",
		solid: Solid.Briefcase,
		outline: Outline.Briefcase,
		statusNew: false,
	},
	{
		name: "cake",
		solid: Solid.Cake,
		outline: Outline.Cake,
		statusNew: true,
	},
	// // FIXME
	// {
	// 	name: "calculator",
	// 	solid: Solid.Calculator,
	// 	outline: Outline.Calculator,
	// 	statusNew: true,
	// },
	{
		name: "calendar",
		solid: Solid.Calendar,
		outline: Outline.Calendar,
		statusNew: false,
	},
	{
		name: "camera",
		solid: Solid.Camera,
		outline: Outline.Camera,
		statusNew: false,
	},
	{
		name: "cash",
		solid: Solid.Cash,
		outline: Outline.Cash,
		statusNew: false,
	},
	{
		name: "chart-bar",
		solid: Solid.ChartBar,
		outline: Outline.ChartBar,
		statusNew: false,
	},
	{
		name: "chart-pie",
		solid: Solid.ChartPie,
		outline: Outline.ChartPie,
		statusNew: false,
	},
	{
		name: "chart-square-bar",
		solid: Solid.ChartSquareBar,
		outline: Outline.ChartSquareBar,
		statusNew: false,
	},
	{
		name: "chat",
		solid: Solid.Chat,
		outline: Outline.Chat,
		statusNew: false,
	},
	{
		name: "chat-alt",
		solid: Solid.ChatAlt,
		outline: Outline.ChatAlt,
		statusNew: false,
	},
	{
		name: "chat-alt2",
		solid: Solid.ChatAlt2,
		outline: Outline.ChatAlt2,
		statusNew: false,
	},
	{
		name: "check",
		solid: Solid.Check,
		outline: Outline.Check,
		statusNew: false,
	},
	{
		name: "check-circle",
		solid: Solid.CheckCircle,
		outline: Outline.CheckCircle,
		statusNew: false,
	},
	{
		name: "chevron-double-down",
		solid: Solid.ChevronDoubleDown,
		outline: Outline.ChevronDoubleDown,
		statusNew: true,
	},
	{
		name: "chevron-double-left",
		solid: Solid.ChevronDoubleLeft,
		outline: Outline.ChevronDoubleLeft,
		statusNew: true,
	},
	{
		name: "chevron-double-right",
		solid: Solid.ChevronDoubleRight,
		outline: Outline.ChevronDoubleRight,
		statusNew: true,
	},
	{
		name: "chevron-double-up",
		solid: Solid.ChevronDoubleUp,
		outline: Outline.ChevronDoubleUp,
		statusNew: true,
	},
	{
		name: "chevron-down",
		solid: Solid.ChevronDown,
		outline: Outline.ChevronDown,
		statusNew: false,
	},
	{
		name: "chevron-left",
		solid: Solid.ChevronLeft,
		outline: Outline.ChevronLeft,
		statusNew: false,
	},
	{
		name: "chevron-right",
		solid: Solid.ChevronRight,
		outline: Outline.ChevronRight,
		statusNew: false,
	},
	{
		name: "chevron-up",
		solid: Solid.ChevronUp,
		outline: Outline.ChevronUp,
		statusNew: false,
	},
	{
		name: "chip",
		solid: Solid.Chip,
		outline: Outline.Chip,
		statusNew: true,
	},
	{
		name: "clipboard",
		solid: Solid.Clipboard,
		outline: Outline.Clipboard,
		statusNew: false,
	},
	{
		name: "clipboard-check",
		solid: Solid.ClipboardCheck,
		outline: Outline.ClipboardCheck,
		statusNew: false,
	},
	{
		name: "clipboard-copy",
		solid: Solid.ClipboardCopy,
		outline: Outline.ClipboardCopy,
		statusNew: false,
	},
	{
		name: "clipboard-list",
		solid: Solid.ClipboardList,
		outline: Outline.ClipboardList,
		statusNew: false,
	},
	{
		name: "clock",
		solid: Solid.Clock,
		outline: Outline.Clock,
		statusNew: false,
	},
	{
		name: "cloud",
		solid: Solid.Cloud,
		outline: Outline.Cloud,
		statusNew: true,
	},
	{
		name: "cloud-download",
		solid: Solid.CloudDownload,
		outline: Outline.CloudDownload,
		statusNew: true,
	},
	{
		name: "cloud-upload",
		solid: Solid.CloudUpload,
		outline: Outline.CloudUpload,
		statusNew: true,
	},
	{
		name: "code",
		solid: Solid.Code,
		outline: Outline.Code,
		statusNew: false,
	},
	{
		name: "cog",
		solid: Solid.Cog,
		outline: Outline.Cog,
		statusNew: false,
	},
	{
		name: "collection",
		solid: Solid.Collection,
		outline: Outline.Collection,
		statusNew: false,
	},
	{
		name: "color-swatch",
		solid: Solid.ColorSwatch,
		outline: Outline.ColorSwatch,
		statusNew: false,
	},
	{
		name: "credit-card",
		solid: Solid.CreditCard,
		outline: Outline.CreditCard,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "cube",
	// 	solid: Solid.Cube,
	// 	outline: Outline.Cube,
	// 	statusNew: true,
	// },
	{
		name: "cube-transparent",
		solid: Solid.CubeTransparent,
		outline: Outline.CubeTransparent,
		statusNew: true,
	},
	{
		name: "currency-bangladeshi",
		solid: Solid.CurrencyBangladeshi,
		outline: Outline.CurrencyBangladeshi,
		statusNew: true,
	},
	{
		name: "currency-dollar",
		solid: Solid.CurrencyDollar,
		outline: Outline.CurrencyDollar,
		statusNew: false,
	},
	{
		name: "currency-euro",
		solid: Solid.CurrencyEuro,
		outline: Outline.CurrencyEuro,
		statusNew: false,
	},
	{
		name: "currency-pound",
		solid: Solid.CurrencyPound,
		outline: Outline.CurrencyPound,
		statusNew: false,
	},
	{
		name: "currency-rupee",
		solid: Solid.CurrencyRupee,
		outline: Outline.CurrencyRupee,
		statusNew: false,
	},
	{
		name: "currency-yen",
		solid: Solid.CurrencyYen,
		outline: Outline.CurrencyYen,
		statusNew: false,
	},
	{
		name: "cursor-click",
		solid: Solid.CursorClick,
		outline: Outline.CursorClick,
		statusNew: false,
	},
	{
		name: "database",
		solid: Solid.Database,
		outline: Outline.Database,
		statusNew: true,
	},
	{
		name: "desktop-computer",
		solid: Solid.DesktopComputer,
		outline: Outline.DesktopComputer,
		statusNew: false,
	},
	{
		name: "device-mobile",
		solid: Solid.DeviceMobile,
		outline: Outline.DeviceMobile,
		statusNew: true,
	},
	{
		name: "device-tablet",
		solid: Solid.DeviceTablet,
		outline: Outline.DeviceTablet,
		statusNew: true,
	},
	{
		name: "document",
		solid: Solid.Document,
		outline: Outline.Document,
		statusNew: false,
	},
	{
		name: "document-add",
		solid: Solid.DocumentAdd,
		outline: Outline.DocumentAdd,
		statusNew: false,
	},
	{
		name: "document-download",
		solid: Solid.DocumentDownload,
		outline: Outline.DocumentDownload,
		statusNew: false,
	},
	{
		name: "document-duplicate",
		solid: Solid.DocumentDuplicate,
		outline: Outline.DocumentDuplicate,
		statusNew: false,
	},
	{
		name: "document-remove",
		solid: Solid.DocumentRemove,
		outline: Outline.DocumentRemove,
		statusNew: false,
	},
	{
		name: "document-report",
		solid: Solid.DocumentReport,
		outline: Outline.DocumentReport,
		statusNew: false,
	},
	{
		name: "document-search",
		solid: Solid.DocumentSearch,
		outline: Outline.DocumentSearch,
		statusNew: true,
	},
	{
		name: "document-text",
		solid: Solid.DocumentText,
		outline: Outline.DocumentText,
		statusNew: true,
	},
	{
		name: "dots-circle-horizontal",
		solid: Solid.DotsCircleHorizontal,
		outline: Outline.DotsCircleHorizontal,
		statusNew: false,
	},
	{
		name: "dots-horizontal",
		solid: Solid.DotsHorizontal,
		outline: Outline.DotsHorizontal,
		statusNew: false,
	},
	{
		name: "dots-vertical",
		solid: Solid.DotsVertical,
		outline: Outline.DotsVertical,
		statusNew: false,
	},
	{
		name: "download",
		solid: Solid.Download,
		outline: Outline.Download,
		statusNew: false,
	},
	{
		name: "duplicate",
		solid: Solid.Duplicate,
		outline: Outline.Duplicate,
		statusNew: false,
	},
	{
		name: "emoji-happy",
		solid: Solid.EmojiHappy,
		outline: Outline.EmojiHappy,
		statusNew: false,
	},
	{
		name: "emoji-sad",
		solid: Solid.EmojiSad,
		outline: Outline.EmojiSad,
		statusNew: false,
	},
	{
		name: "exclamation",
		solid: Solid.Exclamation,
		outline: Outline.Exclamation,
		statusNew: false,
	},
	{
		name: "exclamation-circle",
		solid: Solid.ExclamationCircle,
		outline: Outline.ExclamationCircle,
		statusNew: false,
	},
	{
		name: "external-link",
		solid: Solid.ExternalLink,
		outline: Outline.ExternalLink,
		statusNew: false,
	},
	{
		name: "eye",
		solid: Solid.Eye,
		outline: Outline.Eye,
		statusNew: false,
	},
	{
		name: "eye-off",
		solid: Solid.EyeOff,
		outline: Outline.EyeOff,
		statusNew: false,
	},
	{
		name: "fast-forward",
		solid: Solid.FastForward,
		outline: Outline.FastForward,
		statusNew: true,
	},
	{
		name: "film",
		solid: Solid.Film,
		outline: Outline.Film,
		statusNew: true,
	},
	{
		name: "filter",
		solid: Solid.Filter,
		outline: Outline.Filter,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "finger-print",
	// 	solid: Solid.FingerPrint,
	// 	outline: Outline.FingerPrint,
	// 	statusNew: true,
	// },
	{
		name: "fire",
		solid: Solid.Fire,
		outline: Outline.Fire,
		statusNew: false,
	},
	{
		name: "flag",
		solid: Solid.Flag,
		outline: Outline.Flag,
		statusNew: false,
	},
	{
		name: "folder",
		solid: Solid.Folder,
		outline: Outline.Folder,
		statusNew: false,
	},
	{
		name: "folder-add",
		solid: Solid.FolderAdd,
		outline: Outline.FolderAdd,
		statusNew: false,
	},
	{
		name: "folder-download",
		solid: Solid.FolderDownload,
		outline: Outline.FolderDownload,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "folder-open",
	// 	solid: Solid.FolderOpen,
	// 	outline: Outline.FolderOpen,
	// 	statusNew: true,
	// },
	{
		name: "folder-remove",
		solid: Solid.FolderRemove,
		outline: Outline.FolderRemove,
		statusNew: false,
	},
	{
		name: "gift",
		solid: Solid.Gift,
		outline: Outline.Gift,
		statusNew: true,
	},
	{
		name: "globe",
		solid: Solid.Globe,
		outline: Outline.Globe,
		statusNew: false,
	},
	{
		name: "globe-alt",
		solid: Solid.GlobeAlt,
		outline: Outline.GlobeAlt,
		statusNew: false,
	},
	{
		name: "hand",
		solid: Solid.Hand,
		outline: Outline.Hand,
		statusNew: false,
	},
	{
		name: "hashtag",
		solid: Solid.Hashtag,
		outline: Outline.Hashtag,
		statusNew: false,
	},
	{
		name: "heart",
		solid: Solid.Heart,
		outline: Outline.Heart,
		statusNew: false,
	},
	{
		name: "home",
		solid: Solid.Home,
		outline: Outline.Home,
		statusNew: false,
	},
	{
		name: "identification",
		solid: Solid.Identification,
		outline: Outline.Identification,
		statusNew: true,
	},
	{
		name: "inbox",
		solid: Solid.Inbox,
		outline: Outline.Inbox,
		statusNew: false,
	},
	{
		name: "inbox-in",
		solid: Solid.InboxIn,
		outline: Outline.InboxIn,
		statusNew: false,
	},
	{
		name: "information-circle",
		solid: Solid.InformationCircle,
		outline: Outline.InformationCircle,
		statusNew: false,
	},
	{
		name: "key",
		solid: Solid.Key,
		outline: Outline.Key,
		statusNew: false,
	},
	{
		name: "library",
		solid: Solid.Library,
		outline: Outline.Library,
		statusNew: false,
	},
	{
		name: "light-bulb",
		solid: Solid.LightBulb,
		outline: Outline.LightBulb,
		statusNew: false,
	},
	{
		name: "lightning-bolt",
		solid: Solid.LightningBolt,
		outline: Outline.LightningBolt,
		statusNew: false,
	},
	{
		name: "link",
		solid: Solid.Link,
		outline: Outline.Link,
		statusNew: false,
	},
	{
		name: "location-marker",
		solid: Solid.LocationMarker,
		outline: Outline.LocationMarker,
		statusNew: false,
	},
	{
		name: "lock-closed",
		solid: Solid.LockClosed,
		outline: Outline.LockClosed,
		statusNew: false,
	},
	{
		name: "lock-open",
		solid: Solid.LockOpen,
		outline: Outline.LockOpen,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "login",
	// 	solid: Solid.Login,
	// 	outline: Outline.Login,
	// 	statusNew: true,
	// },
	{
		name: "logout",
		solid: Solid.Logout,
		outline: Outline.Logout,
		statusNew: true,
	},
	{
		name: "mail",
		solid: Solid.Mail,
		outline: Outline.Mail,
		statusNew: false,
	},
	{
		name: "mail-open",
		solid: Solid.MailOpen,
		outline: Outline.MailOpen,
		statusNew: false,
	},
	{
		name: "map",
		solid: Solid.Map,
		outline: Outline.Map,
		statusNew: true,
	},
	{
		name: "menu",
		solid: Solid.Menu,
		outline: Outline.Menu,
		statusNew: false,
	},
	{
		name: "menu-alt1",
		solid: Solid.MenuAlt1,
		outline: Outline.MenuAlt1,
		statusNew: false,
	},
	{
		name: "menu-alt2",
		solid: Solid.MenuAlt2,
		outline: Outline.MenuAlt2,
		statusNew: false,
	},
	{
		name: "menu-alt3",
		solid: Solid.MenuAlt3,
		outline: Outline.MenuAlt3,
		statusNew: false,
	},
	{
		name: "menu-alt4",
		solid: Solid.MenuAlt4,
		outline: Outline.MenuAlt4,
		statusNew: false,
	},
	{
		name: "microphone",
		solid: Solid.Microphone,
		outline: Outline.Microphone,
		statusNew: false,
	},
	{
		name: "minus",
		solid: Solid.Minus,
		outline: Outline.Minus,
		statusNew: true,
	},
	{
		name: "minus-circle",
		solid: Solid.MinusCircle,
		outline: Outline.MinusCircle,
		statusNew: false,
	},
	{
		name: "moon",
		solid: Solid.Moon,
		outline: Outline.Moon,
		statusNew: false,
	},
	{
		name: "music-note",
		solid: Solid.MusicNote,
		outline: Outline.MusicNote,
		statusNew: true,
	},
	{
		name: "newspaper",
		solid: Solid.Newspaper,
		outline: Outline.Newspaper,
		statusNew: false,
	},
	{
		name: "office-building",
		solid: Solid.OfficeBuilding,
		outline: Outline.OfficeBuilding,
		statusNew: false,
	},
	{
		name: "paper-airplane",
		solid: Solid.PaperAirplane,
		outline: Outline.PaperAirplane,
		statusNew: true,
	},
	{
		name: "paper-clip",
		solid: Solid.PaperClip,
		outline: Outline.PaperClip,
		statusNew: false,
	},
	{
		name: "pause",
		solid: Solid.Pause,
		outline: Outline.Pause,
		statusNew: false,
	},
	{
		name: "pencil",
		solid: Solid.Pencil,
		outline: Outline.Pencil,
		statusNew: false,
	},
	{
		name: "pencil-alt",
		solid: Solid.PencilAlt,
		outline: Outline.PencilAlt,
		statusNew: false,
	},
	{
		name: "phone",
		solid: Solid.Phone,
		outline: Outline.Phone,
		statusNew: false,
	},
	{
		name: "phone-incoming",
		solid: Solid.PhoneIncoming,
		outline: Outline.PhoneIncoming,
		statusNew: false,
	},
	{
		name: "phone-missed-call",
		solid: Solid.PhoneMissedCall,
		outline: Outline.PhoneMissedCall,
		statusNew: true,
	},
	{
		name: "phone-outgoing",
		solid: Solid.PhoneOutgoing,
		outline: Outline.PhoneOutgoing,
		statusNew: false,
	},
	{
		name: "photograph",
		solid: Solid.Photograph,
		outline: Outline.Photograph,
		statusNew: false,
	},
	{
		name: "play",
		solid: Solid.Play,
		outline: Outline.Play,
		statusNew: false,
	},
	{
		name: "plus",
		solid: Solid.Plus,
		outline: Outline.Plus,
		statusNew: true,
	},
	{
		name: "plus-circle",
		solid: Solid.PlusCircle,
		outline: Outline.PlusCircle,
		statusNew: false,
	},
	{
		name: "presentation-chart-bar",
		solid: Solid.PresentationChartBar,
		outline: Outline.PresentationChartBar,
		statusNew: true,
	},
	// // FIXME
	// {
	// 	name: "presentation-chart-line",
	// 	solid: Solid.PresentationChartLine,
	// 	outline: Outline.PresentationChartLine,
	// 	statusNew: true,
	// },
	{
		name: "printer",
		solid: Solid.Printer,
		outline: Outline.Printer,
		statusNew: false,
	},
	{
		name: "puzzle",
		solid: Solid.Puzzle,
		outline: Outline.Puzzle,
		statusNew: false,
	},
	{
		name: "qrcode",
		solid: Solid.Qrcode,
		outline: Outline.Qrcode,
		statusNew: false,
	},
	{
		name: "question-mark-circle",
		solid: Solid.QuestionMarkCircle,
		outline: Outline.QuestionMarkCircle,
		statusNew: false,
	},
	{
		name: "receipt-refund",
		solid: Solid.ReceiptRefund,
		outline: Outline.ReceiptRefund,
		statusNew: false,
	},
	{
		name: "receipt-tax",
		solid: Solid.ReceiptTax,
		outline: Outline.ReceiptTax,
		statusNew: true,
	},
	{
		name: "refresh",
		solid: Solid.Refresh,
		outline: Outline.Refresh,
		statusNew: false,
	},
	{
		name: "reply",
		solid: Solid.Reply,
		outline: Outline.Reply,
		statusNew: false,
	},
	{
		name: "rewind",
		solid: Solid.Rewind,
		outline: Outline.Rewind,
		statusNew: true,
	},
	{
		name: "rss",
		solid: Solid.Rss,
		outline: Outline.Rss,
		statusNew: true,
	},
	{
		name: "save",
		solid: Solid.Save,
		outline: Outline.Save,
		statusNew: true,
	},
	{
		name: "save-as",
		solid: Solid.SaveAs,
		outline: Outline.SaveAs,
		statusNew: true,
	},
	{
		name: "scale",
		solid: Solid.Scale,
		outline: Outline.Scale,
		statusNew: false,
	},
	{
		name: "scissors",
		solid: Solid.Scissors,
		outline: Outline.Scissors,
		statusNew: true,
	},
	{
		name: "search",
		solid: Solid.Search,
		outline: Outline.Search,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "search-circle",
	// 	solid: Solid.SearchCircle,
	// 	outline: Outline.SearchCircle,
	// 	statusNew: true,
	// },
	{
		name: "selector",
		solid: Solid.Selector,
		outline: Outline.Selector,
		statusNew: false,
	},
	{
		name: "server",
		solid: Solid.Server,
		outline: Outline.Server,
		statusNew: true,
	},
	{
		name: "share",
		solid: Solid.Share,
		outline: Outline.Share,
		statusNew: false,
	},
	{
		name: "shield-check",
		solid: Solid.ShieldCheck,
		outline: Outline.ShieldCheck,
		statusNew: false,
	},
	{
		name: "shield-exclamation",
		solid: Solid.ShieldExclamation,
		outline: Outline.ShieldExclamation,
		statusNew: false,
	},
	{
		name: "shopping-bag",
		solid: Solid.ShoppingBag,
		outline: Outline.ShoppingBag,
		statusNew: false,
	},
	{
		name: "shopping-cart",
		solid: Solid.ShoppingCart,
		outline: Outline.ShoppingCart,
		statusNew: false,
	},
	{
		name: "sort-ascending",
		solid: Solid.SortAscending,
		outline: Outline.SortAscending,
		statusNew: false,
	},
	{
		name: "sort-descending",
		solid: Solid.SortDescending,
		outline: Outline.SortDescending,
		statusNew: false,
	},
	{
		name: "sparkles",
		solid: Solid.Sparkles,
		outline: Outline.Sparkles,
		statusNew: false,
	},
	{
		name: "speakerphone",
		solid: Solid.Speakerphone,
		outline: Outline.Speakerphone,
		statusNew: false,
	},
	{
		name: "star",
		solid: Solid.Star,
		outline: Outline.Star,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "status-offline",
	// 	solid: Solid.StatusOffline,
	// 	outline: Outline.StatusOffline,
	// 	statusNew: true,
	// },
	{
		name: "status-online",
		solid: Solid.StatusOnline,
		outline: Outline.StatusOnline,
		statusNew: true,
	},
	{
		name: "stop",
		solid: Solid.Stop,
		outline: Outline.Stop,
		statusNew: false,
	},
	{
		name: "sun",
		solid: Solid.Sun,
		outline: Outline.Sun,
		statusNew: false,
	},
	{
		name: "support",
		solid: Solid.Support,
		outline: Outline.Support,
		statusNew: false,
	},
	{
		name: "switch-horizontal",
		solid: Solid.SwitchHorizontal,
		outline: Outline.SwitchHorizontal,
		statusNew: false,
	},
	{
		name: "switch-vertical",
		solid: Solid.SwitchVertical,
		outline: Outline.SwitchVertical,
		statusNew: false,
	},
	{
		name: "table",
		solid: Solid.Table,
		outline: Outline.Table,
		statusNew: true,
	},
	{
		name: "tag",
		solid: Solid.Tag,
		outline: Outline.Tag,
		statusNew: false,
	},
	{
		name: "template",
		solid: Solid.Template,
		outline: Outline.Template,
		statusNew: false,
	},
	{
		name: "terminal",
		solid: Solid.Terminal,
		outline: Outline.Terminal,
		statusNew: false,
	},
	{
		name: "thumb-down",
		solid: Solid.ThumbDown,
		outline: Outline.ThumbDown,
		statusNew: false,
	},
	{
		name: "thumb-up",
		solid: Solid.ThumbUp,
		outline: Outline.ThumbUp,
		statusNew: false,
	},
	{
		name: "ticket",
		solid: Solid.Ticket,
		outline: Outline.Ticket,
		statusNew: false,
	},
	{
		name: "translate",
		solid: Solid.Translate,
		outline: Outline.Translate,
		statusNew: false,
	},
	{
		name: "trash",
		solid: Solid.Trash,
		outline: Outline.Trash,
		statusNew: false,
	},
	{
		name: "trending-down",
		solid: Solid.TrendingDown,
		outline: Outline.TrendingDown,
		statusNew: false,
	},
	{
		name: "trending-up",
		solid: Solid.TrendingUp,
		outline: Outline.TrendingUp,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "truck",
	// 	solid: Solid.Truck,
	// 	outline: Outline.Truck,
	// 	statusNew: true,
	// },
	{
		name: "upload",
		solid: Solid.Upload,
		outline: Outline.Upload,
		statusNew: false,
	},
	{
		name: "user",
		solid: Solid.User,
		outline: Outline.User,
		statusNew: false,
	},
	{
		name: "user-add",
		solid: Solid.UserAdd,
		outline: Outline.UserAdd,
		statusNew: false,
	},
	{
		name: "user-circle",
		solid: Solid.UserCircle,
		outline: Outline.UserCircle,
		statusNew: false,
	},
	{
		name: "user-group",
		solid: Solid.UserGroup,
		outline: Outline.UserGroup,
		statusNew: false,
	},
	{
		name: "user-remove",
		solid: Solid.UserRemove,
		outline: Outline.UserRemove,
		statusNew: false,
	},
	{
		name: "users",
		solid: Solid.Users,
		outline: Outline.Users,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "variable",
	// 	solid: Solid.Variable,
	// 	outline: Outline.Variable,
	// 	statusNew: true,
	// },
	{
		name: "video-camera",
		solid: Solid.VideoCamera,
		outline: Outline.VideoCamera,
		statusNew: true,
	},
	{
		name: "view-boards",
		solid: Solid.ViewBoards,
		outline: Outline.ViewBoards,
		statusNew: false,
	},
	{
		name: "view-grid",
		solid: Solid.ViewGrid,
		outline: Outline.ViewGrid,
		statusNew: false,
	},
	{
		name: "view-grid-add",
		solid: Solid.ViewGridAdd,
		outline: Outline.ViewGridAdd,
		statusNew: false,
	},
	{
		name: "view-list",
		solid: Solid.ViewList,
		outline: Outline.ViewList,
		statusNew: false,
	},
	{
		name: "volume-off",
		solid: Solid.VolumeOff,
		outline: Outline.VolumeOff,
		statusNew: false,
	},
	{
		name: "volume-up",
		solid: Solid.VolumeUp,
		outline: Outline.VolumeUp,
		statusNew: false,
	},
	// // FIXME
	// {
	// 	name: "wifi",
	// 	solid: Solid.Wifi,
	// 	outline: Outline.Wifi,
	// 	statusNew: true,
	// },
	{
		name: "x",
		solid: Solid.X,
		outline: Outline.X,
		statusNew: false,
	},
	{
		name: "x-circle",
		solid: Solid.XCircle,
		outline: Outline.XCircle,
		statusNew: false,
	},
	{
		name: "zoom-in",
		solid: Solid.ZoomIn,
		outline: Outline.ZoomIn,
		statusNew: false,
	},
	{
		name: "zoom-out",
		solid: Solid.ZoomOut,
		outline: Outline.ZoomOut,
		statusNew: false,
	},
]

// ;(() => {
// 	// Generates tags based on a name. Tags are made up of the
// 	// unbroken name and hyphen-separated components.
// 	//
// 	// E.g. ["zoom-out", "zoom", "out"].
// 	//
// 	function generateTags(name) {
// 		const arr = name.split("-")
// 		if (arr.length === 1) {
// 			return arr
// 		}
// 		return [name, ...arr]
// 	}
// 	/* eslint-disable-next-line array-callback-return */
// 	dataset.map(each => {
// 		each.tags = generateTags(each.name)
// 	})
// })()

export default dataset
