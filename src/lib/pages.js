import Main from "./screens/Main.svelte";
import Setup from "./screens/Setup.svelte";

import LoginModal from "./modals/Login.svelte";
import SignupModal from "./modals/Signup.svelte";
import BannedModal from "./modals/Banned.svelte";
import IPBannedModal from "./modals/IPBanned.svelte";
import DeletePostModal from "./modals/DeletePost.svelte";
import ReportPostModal from "./modals/ReportPost.svelte";
import ReportUserModal from "./modals/ReportUser.svelte";
import GCMemberModal from "./modals/GCMember.svelte";
import AddMemberModal from "./modals/AddMember.svelte";
import RemoveMemberModal from "./modals/RemoveMember.svelte";
import CreateChatModal from "./modals/CreateChat.svelte";
import SetQuoteModal from "./modals/SetQuote.svelte";
import ChangePasswordModal from "./modals/ChangePassword.svelte";
import DeleteAccountModal from "./modals/DeleteAccount.svelte";
import ErrorModal from "./modals/Error.svelte";
import ModerateUserInputModal from "../modpanel/ModerateUserInput.svelte";
import LogoutModal from "./modals/Logout.svelte";
import Home from "./Home.svelte";
import Inbox from "./Inbox.svelte";
import Chatlist from "./Chatlist.svelte";
import Groupchat from "./Groupchat.svelte";
import Profile from "./Profile.svelte";
import Recent from "./Recent.svelte";
import Settings from "./Settings.svelte";
import Groupcat from "./Groupcat.svelte";
import Search from "./Search.svelte";
import ModPanel from "../modpanel/ModPanel.svelte";
import ModerateUser from "../modpanel/ModerateUser.svelte";
import Changelog from "./Changelog.svelte";

export default {
    'setup': Setup,
    'login': LoginModal,
    'signup': SignupModal,
    'banned': BannedModal,
    'IPBanned': IPBannedModal,
    'DeletePost': DeletePostModal,
    'ReportPost': ReportPostModal,
    'ReportUser': ReportUserModal,
    'GCMember': GCMemberModal,
    'AddMember': AddMemberModal,
    'RemoveModel': RemoveMemberModal,
    'CreateChat': CreateChatModal,
    'SetQuote': SetQuoteModal,
    'ChangePassword' : ChangePasswordModal, 
    'DeleteAccount': DeleteAccountModal,
    'Error': ErrorModal,
    'ModerateUser': ModerateUserInputModal,
    'logout': LogoutModal,

    'home': Home,
    'Inbox': Inbox,
    'chats': Chatlist,
    'Groupchat': Groupchat,
    'Groupcat': Groupcat,
    'profile': Profile,
    'recent': Recent,
    'settings': Settings,
    'search': Search,
    'modpannel': ModPanel,
    'moderateUser': ModerateUser,
    'changeLog': Changelog
}  